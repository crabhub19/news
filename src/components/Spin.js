import React, { Component } from 'react';
import spinner from './tenor.gif';

export default class Spin extends Component {
  render() {
    return (
      <div>
          <img className='z-10 fixed w-screen object-fill h-screen' src={spinner} alt="" />
      </div>
    )
  }
}
