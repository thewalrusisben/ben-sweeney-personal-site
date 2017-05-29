import React, { Component } from 'react'
import { Switch, Route } from 'react-router'
import './App.css'
import Navigation from './components/navigation/Navigation'
import Drawer from './components/drawer/Drawer'
import Main from './views/Main/Main'
import Writing from './views/Writing/Writing'
import Applications from './views/Applications/Applications'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      drawerOpen: undefined
    }
    this.toggleDrawer = this.toggleDrawer.bind(this)
  }

  toggleDrawer () {
    this.setState({drawerOpen: !this.state.drawerOpen})
  }
  render () {
    return (
      <div className="App" >
        <Navigation handleDrawerToggle={() => this.toggleDrawer()} />
        <Drawer drawerOpen={this.state.drawerOpen} handleDrawerToggle={() => this.toggleDrawer()} />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/writing/:id?' component={Writing} />
          <Route exact path='/apps' component={Applications} />
          <Route component={Main} />
        </Switch>
      </div>
    )
  }
}

export default App;
