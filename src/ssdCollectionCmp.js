import React from 'react';
import './App.css';
// import Card from './dragindCmo';

function SSDCollection(props) {
  return (
    <div className="ssdCollection">
        <div>SSD collection </div>
        <div className="ssds">
            {false?
                props.ssds.map((ssd, i, ssdsList)=>{
                   return(
                    <div className="singleSSD">
                        {ssd.name}
                    </div>
                   )
                }):null
            }
        </div>
    </div>
  );
}

export default SSDCollection;