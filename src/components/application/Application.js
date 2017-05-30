import React, { Component } from 'react'
import './Application.css'

class Application extends Component {
  render () {
    return (
      <li className="appListItem">
        <div className="appHeader">
          <h2 className="appTitle">{this.props.title}</h2>
          <span className="appSubtitle">{this.props.subtitle}</span>
        </div>
        <img src={this.props.image_url} alt={`${this.props.title} Application Screen Shot`} />
        <div className="appDescription">{this.props.description}</div>
      </li>
    )
  }
}

export default Application
