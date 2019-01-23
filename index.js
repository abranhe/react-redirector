import React, { Component } from "react";

export default class Redirector extends Component {
  
    constructor(props) {
    super();
    this.state = {...props};
  }

  componentWillMount() {
    window.location = this.state.to;
  }

  render() {
    return (<section>Redirecting...</section>);
  }
}