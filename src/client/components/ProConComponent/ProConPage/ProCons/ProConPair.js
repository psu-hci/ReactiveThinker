import React, { Component, PropTypes } from 'react';
import Argument from './Argument';

class ProConPair extends Component {

  render () {
    var self = this;
    return (
      <div className="ui grid">
        <div className="ui row">
          <div className="one wide column"></div>
          <div className="five wide column">
            <Argument
              actions={ self.props.actions }
              argument={ self.props.procon.pro }
              proconIdx={ self.props.proconIdx }
              side="pro"
            />
          </div>
          <div className="five wide column">
            <Argument
              actions={ self.props.actions }
              argument={ self.props.procon.con }
              proconIdx={ self.props.proconIdx }
              side="con"
            />
          </div>
        </div>
      </div>
    );
  }
}

ProConPair.propTypes = {
  actions: PropTypes.object.isRequired,
  procon: PropTypes.object.isRequired,
  proconIdx: PropTypes.number.isRequired
};

export default ProConPair;
