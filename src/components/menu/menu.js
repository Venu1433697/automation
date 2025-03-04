// import React,{Component} from 'react';
// import './menu.css'
// class Menu extends Component{
//   render(){
//     const data=';'
//     fetch('/menuitems')
//     .then(res=>{
//       data=res;
//       console.log(data)
//     })
//     return (<div>
//       for(i=0;i<6;i++){
//         <div className="items">
//         <h1>Menu Items</h1>
//       <div className="row">
        
//             <div className="col-6 col-md-4 col-lg-3 pt-5 pb-5 ">

//               <div className="shadow menuBorder p-3">
//               <h2 className="menuHeading" >{data.title}</h2>
//               <p>
//                 <img className="menuImg w-100 " src={data.imglink}  />
//               </p>
//               <p className="menuItemDiscription">{data.discription}</p>
//               <button className="orderbutton" type="button">Order</button>
//               </div>
    
//             </div>
        
//          </div>
//       </div>
//     </div>
//       }
      
//   })
// }

// export default Menu;

import React, { Component } from 'react';
import './menu.css';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: [] // Initialize an empty array to hold menu items
    };
  }

  render() {
    fetch('/menuitems')
      .then(res => res.json())
      .then(data => {
        this.setState({ menuItems: data }); // Update state with fetched menu items
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching menu items:', error);
      });

    return (
      <div>
        
          <div className="items">
            <h1>Menu Items</h1>
            <div className="row">
            {this.state.menuItems.map(item => (
              <div className="col-6 col-md-4 col-lg-3 pt-5 pb-5">
                <div className="shadow menuBorder p-3">
                  <h2 className="menuHeading">{item.title}</h2>
                  <p>
                    <img className="menuImg w-100" src={item.imglink} alt={item.title} />
                  </p>
                  <p className="menuItemDiscription">{item.description}</p>
                  <button className="orderbutton" type="button">
                    Order
                  </button>
                </div>
              </div>
              ))}
            </div>
          </div>
        
      </div>
    );
  }
}
{/* key={item.id} */}
export default Menu;
