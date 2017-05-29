import React from 'react'
import { Link } from 'react-router-dom'
import './Applications.css'
import GoalTracker from './goaltracker.jpg'
import ButtonBox from '../../components/button-box/ButtonBox'

const Applications = () => {
  return (
    <div className="applicationsPageContainer">
      <div className="tile">
        <div className="tileHeaderBar">
          <Link to='/'><ButtonBox label={'close'} /></Link>
          <div className="tileHeaderText"><h1>applications</h1></div>
        </div>
        <div className="contents">
          <div>
            <li className="appListItem">
              <div className="appHeader">
                <h2 className="appTitle">Goal Tracker</h2>
                <span className="appSubtitle"> / /  React To-Do Application</span>
              </div>
              <img src={GoalTracker} alt="'Goal Tracker' To-Do Application Screenshot" />
              <div className="appDescription">words</div>
            </li>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Applications
