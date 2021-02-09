import React from 'react'
import './Property.css'
import prop from '../../../images/property.jpg'
import bed from '../../../icons/bed.svg'
import bath from '../../../icons/bath.svg'
import squares from '../../../icons/squares.svg'


function Property() {
    return ( 
        <div className="property-wrapper">
            <div className="property-thumbnail" style={{backgroundImage: `url(${prop})`}}></div>
            <div className="property-info-wrapper">
                <p className="property-purpose">For sale</p>
                <div className="propery-main-info">
                    <p className="property-name">Optingenstrasse Bern</p>
                    <p className="property-price">765CHF</p>
                </div>

                <div className="icons-wrapper">
                    
                    <img src={bed} />
                    <span>3 bed</span>

                    <img src={bath} />
                    <span>2 bath</span>

                    <img src={squares} />
                    <span>250 m</span>
                </div>

            </div>
        </div>
    );
}

export default Property;
