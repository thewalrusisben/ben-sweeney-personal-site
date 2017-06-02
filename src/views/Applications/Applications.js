import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Applications.css'
import ButtonBox from '../../components/button-box/ButtonBox'
import Application from '../../components/application/Application'
import Config from '../../config/config'

class Applications extends Component {
  constructor(props) {
    super(props)
    this.state = {
      applications: []
    }
  }
  componentDidMount () {
    axios.get(`${Config}/applications`)
    .then((apiResponse) => {
      this.setState({applications: apiResponse.data})
    })
    .catch((err) => {
      throw new Error(err)
    })
  }
  render () {
    return (
      <div className="applicationsPageContainer">
        <div className="tile">
          <div className="tileHeaderBar">
            <Link to='/'><ButtonBox label={'close'} /></Link>
            <div className="tileHeaderText"><h1>applications</h1></div>
          </div>
          <div className="contents">
            <div>
              {this.state.applications.map((app) => {return <Application key={app.id} {...app}/>})}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Applications
