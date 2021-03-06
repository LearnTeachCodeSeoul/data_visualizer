import React from 'react';
import PropTypes from 'prop-types';
import { ItemTypes } from './Constants';
import { DropTarget } from 'react-dnd';

const collect = (connect, monitor) => {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    };
};


class Axis extends React.Component {
    render(){
        const { connectDropTarget, isOver } = this.props;
        return connectDropTarget(
            <div>Drop Target
            {isOver &&
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '100%',
                  width: '100%',
                  zIndex: 1,
                  opacity: 0.5,
                  backgroundColor: 'yellow',
                }} />
              }
            </div>
            

        )
    }     
}

export default DropTarget(ItemTypes.COLUMN, {} , collect)(Axis);