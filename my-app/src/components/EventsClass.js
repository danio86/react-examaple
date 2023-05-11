import React, { Component } from 'react'

export class EventsClass extends Component {
    clickHandler(){
        console.log('Clicked Class Button')
    }
  render() {
    return (
        <button onClick={this.clickHandler}>Click-Me class component</button>
    )
  }
}

export default EventsClass