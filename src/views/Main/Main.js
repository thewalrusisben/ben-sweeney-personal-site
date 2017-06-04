import React from 'react'
import { Link } from 'react-router-dom'
import './Main.css'
import ButtonPrimary from '../../components/button-primary/ButtonPrimary'


const Main = () => {
  return (
    <div>
      <div className={'welcomeMessage'}>
        <h1>hi, i'm ben.</h1>
        <h2>this is a blog, amongst other things.</h2>
      </div>
      <div className={'browseButtonPosition browseButtonPositionTablet'}>
        <Link to='/writing'><ButtonPrimary label={'writing'} /></Link>
        <Link to='/apps'><ButtonPrimary label={'apps'} /></Link>
      </div>
    </div>
  )
}

export default Main
