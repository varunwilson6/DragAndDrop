import React from 'react';
// import Card from './dragindCmo';

function ssdDrops(props) {
  return (
    <div className="ssdDrops">
        <div>SSD Drops </div>
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

export default ssdDrops;
