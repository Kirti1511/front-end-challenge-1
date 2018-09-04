import React, { Component } from 'react';
import styles from '../styles.css';

/*
* displaying sources for the particular size
 */
export default class Sources extends Component {
  constructor(props){
    super(props);
    this.state = {
      hover: false
    }
    this.hoverOn = this.hoverOn.bind(this);
    this.hoverOff = this.hoverOff.bind(this);
  }

  hoverOn(){
      this.setState({hover: true});
  }

  hoverOff(){
      this.setState({hover: false});
  }

  render() {
    let { source, onClick } = this.props;
    let { hover } = this.state;
    let styleNA = !source.isavailable ? styles.notAvailable : styles.div;
    let styleHover = hover ? styles.onHover : styles.div;
    return (
      <div style={styleNA} style={styleHover} 
        onClick={onClick} 
        source={JSON.stringify(source)} 
        onMouseEnter={this.hoverOn} 
        onMouseLeave={this.hoverOff}
      >
        Address :  {source.host}, {source.city}
        <br />
        Stock: {(source.stock && source.isavailable) ? source.stock: 'Out of Stock'}
        <br />
        Price: {source.discounted_price}
      </div>
    )
  }
}
