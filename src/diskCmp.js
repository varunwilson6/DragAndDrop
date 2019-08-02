import React from 'react';
import { DragSource } from 'react-dnd';

const itemFunc = (props)=> {
  return props.itemType
}

const itemSource = {
  beginDrag(props, monitor, component) {
    return props.data;
  },
  endDrag(props, monitor, component) {
    if(!monitor.didDrop()) {return;}
    return props.hddDropHandler(props.data)
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  }
}


function DiskCmp(props) {
  const { connectDragSource, isDragging, item } = props;

  console.log(props);

  return connectDragSource(
    <div   className="diskCmp" style={{opacity:isDragging?0:""}}>
      <div>HDD : <small>{props.data.title}</small></div>
    </div>
    );
}

export default DragSource(itemFunc, itemSource, collect)(DiskCmp)