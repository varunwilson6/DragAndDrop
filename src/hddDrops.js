import React,{useState} from 'react';
import { DropTarget } from 'react-dnd'
import {ItemTypes} from "./dragTypes/DragTypes";
import DiskCmp from "./diskCmp";
// import Card from './dragindCmo';


function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    item:monitor.getItem(),
  }
}

const HddDrops=(props)=> {

  const { connectDropTarget, hovered, item} = props;
  console.log(props);
  console.log(item);
  return connectDropTarget(
    <div  className="hddDrops" style={{background:hovered?"rgba(255, 238, 113, 1)":""}} >
        <div>HDD Drops </div>
        {/* <div className="hdds">
            {props.hddDrops.map((hdd, i, hddsList)=>{
                   return(
                    <div key={`${hdd.id}`} className="singleHDD">
                        {hdd.title}
                    </div>
                   )
                })}
        </div> */}
        <div className="hdds">
            {props.hddDrops.map(hdd=><DiskCmp hddDropHandler={props.hddDropHandler}   itemType="HDD" key={hdd.id} data={hdd} />)}
        </div>
    </div>
  );
}

export default DropTarget(["HDD", "SSD"], {} , collect)(HddDrops)
