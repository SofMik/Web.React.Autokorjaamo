import React from 'react';
import './PriseList.css'
import {items} from '.././../data'

export default function PriseList(){
    return (
        <div className="priselist">
            <h2 className="priselist-header">Hinnasto</h2>
            <div className="table">
                <div className="table-row table-header">
                    <div className="table-item">Palvelut</div>
                    <div className="table-item">Henkilö- ja pakettiautot</div>
                    <div className="table-item">Kuorma-autot</div>
                </div>
                {items.map((item) => (
                <div className="table-row" key={item.id}> 
                    <div className="table-cell">{item.description}</div> 
                    <div className="table-cell">{item.prise_car}</div> 
                    <div className="table-cell">{item.prise_truck}</div> 
                </div> 
                ))}
            </div>
        </div>
    )  
}
