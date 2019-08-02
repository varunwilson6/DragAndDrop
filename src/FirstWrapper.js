import React, { Component } from 'react';
import './App.css';
import HddCollection from "./hddCollectionCmp";
import SSDCollection from "./ssdCollectionCmp";
import HddDrops from "./hddDrops";
import SsdDrops from "./ssdDrop";
import hddData from "./data";
import update from 'immutability-helper';
import HTML5Backend from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

class FirstWrapperCmp extends Component {

    state = {
        hddCollection:hddData,
        hddDrops:[],
    }

    hddDropHandler = (param1,param2) => {

        console.log(param1)

        let indexToRemove = this.state.hddCollection.findIndex(item=> item.id === param1.id)
        console.log(indexToRemove)
        let stateArray = [...this.state.hddCollection]
        console.log("stateArray", stateArray)
        let tempStateArray = update(stateArray, {$splice: [[indexToRemove,1]]})
        let pushingarray = param1;
        console.log(pushingarray)
        let tempState = update(this.state, {
            hddCollection: {$set:tempStateArray},
            hddDrops:{$push:[pushingarray]}
        }
        );
        this.setState(tempState, ()=> {
            console.log("Consloing State,>>",this.state)
        });
        
        
    }

    render() {
        return (
          <DndProvider backend={HTML5Backend}>
              <div className="WrapperCmp">
                  <div className="colletionWrapper">
                      <HddCollection hddDropHandler={this.hddDropHandler}  hddCollection={this.state.hddCollection} />
                      <SSDCollection/>
                  </div>
                  <div className="DropsWrapper">
                      <HddDrops hddDrops={this.state.hddDrops} hddDropHandler={this.hddDropHandler} />
                      <SsdDrops/>
                  </div>
              </div>
          </DndProvider>
          )
}
}

export default FirstWrapperCmp;
