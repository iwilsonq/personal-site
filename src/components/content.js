import React, { Component } from 'react';

const contentStyle = {
  margin: 'auto 0px auto 0px',
  border: '1px solid black',
}

export default class Content extends Component {
  render() {
    return (
      <div
        style={contentStyle}
        className="content"
      >
        {this.props.childToRender}
      </div>
    );
  }
}
