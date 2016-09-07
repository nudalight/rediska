import React, { Component } from 'react';

// components
import * as IntroActions from '../../actions/IntroActions';
import IntroStore from '../../stores/IntroStore';
import { browserHistory, hashHistory } from 'react-router';


// sub componets
import IntroForm from './IntroForm';


export default class Intro extends React.Component {

  constructor(){
    super();
    this.state = {
      nickname: 'blah'
    }
  }

  componentWillMount() {
    let _this = this;
    IntroStore.on('placeholder-changed', this.getPlaceholder.bind(_this));
  }

  getPlaceholder(){
    this.setState({
      nickname: 'hr'
    });

    hashHistory.push('/list');
  }

  teaseButtonClicked() {
    console.log('clicked', this);
    IntroActions.updatePlaceholder({
      newPlaceholder: 'bardzo'
    })
  }


  render() {
    return (
      <div className="root-intro">
        <div className="il">
          <IntroForm nickname={ this.state.nickname } />
          <button onClick={ this.teaseButtonClicked.bind(this) }>TEASE</button>
        </div>
      </div>
    );
  }
}

