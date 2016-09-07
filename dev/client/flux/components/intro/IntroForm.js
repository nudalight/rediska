import React from 'react';

import Errors from './errors';

export default React.createClass({

  render(){
    return(
      <div className="intro-form">
        <div className="il">
          <form>
            <div className="input-container">
              <input placeholder={ this.props.nickname } />
              <span className="subtext">Type in your name and press Enter</span>
              <Errors />
            </div>
            
          </form>
        </div>
      </div>
    );
  }

});

