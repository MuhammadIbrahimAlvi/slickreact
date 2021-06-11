import React from 'react';
import './NavigationComp.css';
import LinkComp from '../LinksComps/LinkComp';

import navLinks from './NavData';
const NavigationComp = () => {
    console.log(navLinks)
    return (

        <div>
            {/* <p>All Navigation Components or Buttons or links Will be here</p> */}
            <div>

                {navLinks.map((ele,ind) => {
                    return (
                        <LinkComp imgSrc={ele.src} textValue={ele.text} key={ind*Math.random(16)}/>
                    );
                })}

            </div>
        </div>
    )
}

export default NavigationComp;