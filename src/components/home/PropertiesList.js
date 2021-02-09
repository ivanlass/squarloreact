import React from 'react'
import './PropertiesList.css'
import Property from './Property/Property'


function PropertiesList() {
    return ( 
        <div className="App properties-list">
            <h2>New properties on Front</h2>
            <Property/>
            <Property/>
            <Property/>
            <Property/>
            <Property/>
            <Property/>
            <Property/>
            <Property/>
            <Property/>
        </div>
    );
}

export default PropertiesList;
