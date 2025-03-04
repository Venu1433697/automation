#!/bin/bash

# Load variables from .env
if [ -f .env ]; then
  echo "🔑 Loading secrets from .env..."
  source .env
else
  echo "❌ .env file not found! Exiting..."
  exit 1
fi

# Ensure SSH key permissions are secure
sudo chmod 600 $EC2_KEY

# Check if npm is installed
if ! command -v npm &> /dev/null; then
  echo "❌ npm is not installed. Exiting..."
  exit 1
fi

# Clone or pull the latest changes
if [ -d "$LOCAL_CLONE_DIR" ]; then
  echo "📥 Pulling latest changes from GitHub..."
  cd $LOCAL_CLONE_DIR && git pull && cd ..
else
  echo "🐙 Cloning the GitHub repo..."
  git clone $GIT_REPO $LOCAL_CLONE_DIR
fi

cd $LOCAL_CLONE_DIR

# Set permissions
echo "🔒 Setting file permissions..."
find $LOCAL_CLONE_DIR -type f -name "*.sh" -exec chmod +x {} \;
find $LOCAL_CLONE_DIR -type f -name "*.conf" -exec chmod 644 {} \;
chmod -R 755 $LOCAL_CLONE_DIR
echo "✅ Permissions updated!"

# Build and test
echo "🔨 Building the React app..."
npm install
npm run build
echo "🧪 Testing the React app..."
npm test

# Package the build
echo "📦 Creating build package..."
tar -czf build.tar.gz -C build .

# Upload to EC2
echo "📤 Uploading package to EC2..."
scp -i $EC2_KEY build.tar.gz $EC2_USER@$EC2_IP:/tmp

# Deploy on EC2
echo "🚀 Deploying to EC2..."
ssh -i $EC2_KEY -o StrictHostKeyChecking=no $EC2_USER@$EC2_IP << EOF
  if ! command -v nginx &> /dev/null; then
    sudo yum install -y nginx
    sudo systemctl start nginx
    sudo systemctl enable nginx
  fi

  sudo mkdir -p $APP_DIR
  sudo rm -rf $APP_DIR/*
  sudo tar -xzf /tmp/build.tar.gz -C $APP_DIR
  sudo rm /tmp/build.tar.gz

  sudo tee /etc/nginx/conf.d/myapp.conf > /dev/null << EOL
server {
    listen 80;
    server_name $EC2_IP;

    root $APP_DIR;
    index index.html;

    location / {
        try_files \$uri \$uri/ /index.html;
    }
}
EOL

  sudo systemctl restart nginx
EOF

rm build.tar.gz
echo "✅ Deployment complete! Access your app at http://$EC2_IP"



