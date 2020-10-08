import React, { Component } from 'react';

export class HydrappView extends Component {
  constructor(props) {
    super(props);
    this.hydrapp = React.createRef('https://dziekonskik.github.io/HydrApp/');
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return <div ref={this.hydrapp}></div>;
  }
}

export default HydrappView;
