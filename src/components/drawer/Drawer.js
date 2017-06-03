import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Drawer.css'
import close from './close.svg'

class Drawer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      drawerClass: 'drawerContainer',
      drawerBgClass: 'drawerBackgroundLight'
    }
    this.toggleDrawer = this.toggleDrawer.bind(this)
  }
  
  toggleDrawer () {
    this.props.handleDrawerToggle()
  }

  componentWillReceiveProps (nextProps) {
    // This function checks to see what the prior state of props.drawerOpen was
    // and makes a decision about which class should be applied to the Drawer
    // in order to correctly set whether it should be displayed at a given time
    // and, more to the point, what animation should be used if any.
    // The component mounts with 'drawerClass' set to a default value, and this
    // block only gets called when props are updated, letting us know precisely
    // what the current and next animation ought to be, given that there are only
    // three possible options: `undefined`, `true`, and `false`.
    // The third 'type' here, of `undefined` represents the initial value.
    if (this.props.drawerOpen === undefined && nextProps.drawerOpen === true) {
      this.setState({drawerClass: 'drawerContainer openDrawerContentContainer', drawerBgClass: 'drawerBackgroundDark'})
    } else if (this.props.drawerOpen === true && nextProps.drawerOpen === false) {
      this.setState({drawerClass: 'drawerContainer closeDrawerContentContainer', drawerBgClass: 'drawerBackgroundLight'})
    } else if (this.props.drawerOpen === false && nextProps.drawerOpen === true) {
      this.setState({drawerClass: 'drawerContainer openDrawerContentContainer', drawerBgClass: 'drawerBackgroundDark'})
    } 
  }

  render () {
    return (
      <div className={this.state.drawerBgClass} onClick={this.toggleDrawer}>
        <div className={this.state.drawerClass}>
          <div>
            <img src={close} alt='Close Drawer' className='closeDrawerIcon' onClick={this.toggleDrawer} />
          </div>
          <ul className='drawerListContainer'>
            <Link to='/writing'><li><span>writing</span></li></Link>
            <Link to='apps'><li><span>apps</span></li></Link>
          </ul>
        </div>
      </div>
    )
  }
}

export default Drawer
