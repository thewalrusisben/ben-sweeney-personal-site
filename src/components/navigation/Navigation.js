import React, { Component } from 'react'
import './Navigation.css'

class Navigation extends Component {
  constructor(props) {
    super(props)
    this.toggleDrawer = this.toggleDrawer.bind(this)
  }
  
  toggleDrawer () {
    this.props.handleDrawerToggle()
  }
  render () {
    return (
      <nav className='navBar'>
        <div className='hamburgerContainer' onClick={this.toggleDrawer}>
          <div className='hamburger' />
          <div className='hamburger' />
          <div className='hamburger' />
        </div>
      </nav>
    )
  }
}

export default Navigation
