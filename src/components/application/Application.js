import React, { Component } from 'react'
import './Application.css'


class Subtitle extends Component {
  render () {
    if (this.props.github) {
      return (
        <div>
          <a href={this.props.github} target="_blank">
            <img src={"./github.png"} className="subtitle-icon" />
            <span className="appSubtitle">{this.props.subtitle}</span>
          </a>
        </div>
      )
    } else {
      return (
        <div><span className="appSubtitle">{this.props.subtitle}</span></div>
      )
    }
  }
}

class Application extends Component {
  render () {
    return (
      <li className="appListItem">
        <div className="appHeader">
          <h2 className="appTitle"><a href="" target="_blank">{this.props.title}</a></h2>
          <Subtitle github={this.props.github} subtitle={this.props.subtitle} />
        </div>
        { this.props.image_url ? <img id="screenshot" src={this.props.image_url} alt={`${this.props.title} Application Screen Shot`} /> : <div />}
        <div className="appDescription">{this.props.description}</div>
      </li>
    )
  }
}

export default Application
