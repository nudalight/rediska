import React from 'react';

import IntroForm from './IntroForm';

export default React.createClass({
  render(){
    return(
      <div className="intro-root">
        <IntroForm nickname='blef'  />
      </div>
    );
  }
});

