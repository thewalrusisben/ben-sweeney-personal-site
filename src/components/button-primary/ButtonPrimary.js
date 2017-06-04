import React, { Component } from 'react'
import './ButtonPrimary.css'

class ButtonPrimary extends Component {
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
      <div className={'buttonContainer'} onClick={this.toggleDrawer}>
        <div className={'button'}>
          <span>{this.props.label}</span>
        </div>
      </div>
    )
  }

}

export default ButtonPrimary
