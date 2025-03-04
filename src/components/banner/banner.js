import React, { Component } from "react";
import './banner.css'
class Banner extends Component  {
    render() {
        return(  
               <>
                <div className="homeMainBaner">
                <h1 className="homeMainBanerHeading">California<br />'Maki on </h1>
                <div className="bannerParag"> 
                  <p>Where expert culinary skills and an innate appreciation of nature come together to inspire and enhance the Japanese dining experience. Fauget Sushi is no ordinary dining restaurant. We believe in providing an alluring ambience that sets us apart from a regular diner.</p>
                </div>
            </div>
            </>
        );
    }
}

export default Banner;
