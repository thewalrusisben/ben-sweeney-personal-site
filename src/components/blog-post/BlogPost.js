import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import request from 'request'
import Config from '../../config/config'

import './BlogPost.css'
import ButtonBox from '../../components/button-box/ButtonBox'
class BlogPost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post: {}
    }
  }
  componentDidMount () {
    let requestParams = this.props.id ? this.props.id : ''
    request.get(`${Config}/post/${requestParams}`, (error, response, body) => {
      if (error) {
        throw new Error(error)
      } else {
        this.setState({post: {...JSON.parse(body)}})
      }
    }) 
  }
  render () {
    if (this.state.post.id) {
      return (
        <div className="tile">
          <div className="tileHeaderBar">
            <Link to='/'><ButtonBox label={'close'} /></Link>
            <Link to='/writing?search=true'><ButtonBox label={'more'} /></Link>
            <div className="tileHeaderText"><h1>{this.state.post.title}</h1></div>
            <div className="tileSubheaderText">{new Date(this.state.post.created).toLocaleDateString()}</div>
          </div>
          <div className="postContents">{this.state.post.contents}</div>
        </div>
      )
    } else {
      return <div className="tile"></div>
    }
  }
}

export default BlogPost
