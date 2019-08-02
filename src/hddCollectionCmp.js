import React from 'react';
import './App.css';
import DiskCmp from "./diskCmp";
import { DropTarget } from 'react-dnd'

// import Card from './dragindCmo';

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    item:monitor.getItem(),
  }
}

function HddCollection(props) {

  const { connectDropTarget, hovered, item} = props;

  return connectDropTarget(
    <div className="hddCollection">
        <div>HDD collection </div>
        <div className="hdds">
            {props.hddCollection.map(hdd=><DiskCmp hddDropHandler={props.hddDropHandler}   itemType="HDD" key={hdd.id} data={hdd} />)}
        </div>
    </div>
  );
}

export default DropTarget(["HDD", "SSD"], {} , collect)(HddCollection)
