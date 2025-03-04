import React from 'react'; 
import NavScrollExample from '../nave/navebar';
import Banner from '../banner/banner';
import Menu from '../menu/menu';

import './home.css'


const Home=()=>(
    <div> 
    <div className="banerbgimgFor">
    <NavScrollExample></NavScrollExample>
    <Banner></Banner>
    </div>
    <Menu></Menu>
    </div>
)
export default Home;