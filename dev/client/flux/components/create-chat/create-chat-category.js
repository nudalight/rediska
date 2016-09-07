import React, { Component } from 'react';

export default class CreateChatTitle extends Component {

  constructor(){
    super();
    this.state = {
      text: {
        plh: 'e.g. What is your favorite book?'
      }
    }
  }

  render(){
    return(
      <div className="form-control">
        <div className="il">
          <input
            name="channelName"
            type="text"
            placeholder={ this.state.text.plh }
          />
        </div>
      </div>
    );
  }
}
