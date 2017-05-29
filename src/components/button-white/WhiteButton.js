import React, { Component } from 'react'
import './WhiteButton.css'

class WhiteButton extends Component {
  constructor(props) {
    super(props)
    this.toggleDrawer = this.toggleDrawer.bind(this)
  }
  toggleDrawer () {
    if (this.props.handleDrawerToggle) {
      this.props.handleDrawerToggle()  
    }
  }
  render () {
    return (
      <div className={'whiteButtonContainer'} onClick={this.toggleDrawer}>
        <span>{this.props.label}</span>
      </div>
    )
  }

}

export default WhiteButton
