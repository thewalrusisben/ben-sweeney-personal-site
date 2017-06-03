import React, { Component } from 'react'
import './ButtonBox.css'
import MoreBlack from './icons/more/more-black.svg'
import MoreWhite from './icons/more/more-white.svg'
import CloseBlack from './icons/close/close-black.svg'
import CloseWhite from './icons/close/close-white.svg'
import BackBlack from './icons/back/back-black.svg'
import BackWhite from './icons/back/back-white.svg'
import ForwardBlack from './icons/forward/forward-black.svg'
import ForwardWhite from './icons/forward/forward-white.svg'

class ButtonBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image: undefined
    }
    this.swapImage = this.swapImage.bind(this)
    this.handleClickEvent = this.handleClickEvent.bind(this)
  }

  swapImage (elm) {
    console.log(elm.target.dataset.name)
    if (elm.target.dataset.name === 'more') {
      this.state.image === MoreBlack ? this.setState({image: MoreWhite}) : this.setState({image: MoreBlack})  
    }
    if (elm.target.dataset.name === 'close') {
      this.state.image === CloseBlack ? this.setState({image: CloseWhite}) : this.setState({image: CloseBlack})  
    }
    if (elm.target.dataset.name === 'back') {
      this.state.image === BackBlack ? this.setState({image: BackWhite}) : this.setState({image: BackBlack})
    }
    if (elm.target.dataset.name === 'forward') {
     this.state.image === ForwardBlack ? this.setState({image: ForwardWhite}) : this.setState({image: ForwardBlack}) 
    }
  }

  componentDidMount () {
    if (this.props.label === 'more') {
      this.setState({image: MoreBlack})
    } else if (this.props.label === 'close') {
      this.setState({image: CloseBlack})
    } else if (this.props.label === 'back') {
      this.setState({image: BackBlack})
    } else if (this.props.label === 'forward') {
      this.setState({image: ForwardBlack})
    }
  }

  handleClickEvent (elm) {
    if (this.props.handleClickFromChild) {
      this.props.handleClickFromChild(elm.target.dataset.name)  
    }
  }

  render () {
    return (
      <div className="buttonBox" onMouseOver={this.swapImage} onMouseLeave={this.swapImage} onClick={this.handleClickEvent} data-name={this.props.label} >
        <img src={this.state.image} alt="View More Posts"/>
      </div>
    )
  }
}

export default ButtonBox
