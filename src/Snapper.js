import React, { Component } from 'react';

const me1 = '../public/imgs/me1.jpg';
const me2 = '../public/imgs/me2.jpg';
const me3 = '../public/imgs/me3.jpg';

const styles = {
  snapper: {
    height: 60,
    width: 60,
    borderRadius: '50%'
  }
}

export default class Snapper extends Component {
  constructor(props) {
    super(props);

    this.renderSnap = this.renderSnap.bind(this);
  }

  componentDidMount() {
    this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 1000)
  }


  renderSnap(number) {
    return <img style={styles.snapper} src={require(`../public/imgs/me${number}.jpg`)} alt="me" />
  }

  render() {
    const id = (Date.now() % 3) + 1;

    return (
      <div className="snapper" >
        {this.renderSnap(id)}
      </div>
    );
  }
}
