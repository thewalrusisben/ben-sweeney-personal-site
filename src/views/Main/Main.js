import React from 'react'
import { Link } from 'react-router-dom'
import './Main.css'
import WhiteButton from '../../components/button-white/WhiteButton'


const Main = () => {
  return (
    <div>
      <div className={'welcomeMessage'}>
        <h1>hi, i'm ben.</h1>
        <h2>this is a blog, amongst other things.</h2>
      </div>
      <div className={'browseButtonPosition browseButtonPositionTablet'}>
        <Link to='/writing'><WhiteButton label={'writing'} /></Link>
        <Link to='/apps'><WhiteButton label={'apps'} /></Link>
      </div>
    </div>
  )
}

export default Main
