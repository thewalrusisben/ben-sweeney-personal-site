import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import request from 'request'
import './BlogPostSearch.css'
import ButtonBox from '../../components/button-box/ButtonBox'
import Config from '../../config/config'

class BlogPostSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 1,
      posts: []
    }
    this.handlePageChange = this.handlePageChange.bind(this)
    this.loadNewPosts = this.loadNewPosts.bind(this)
  }

  // Define method to load new posts from API
  // not invoked here, but necessary to separate 
  // in order to be invoked on component mount
  // and during state change when navigating pages.
  loadNewPosts () {
    request.get(`${Config}/posts/${this.state.page}`, (error, response, body) => {
      if (error) {
        throw new Error(error)
      } else {
        this.setState({posts: [...JSON.parse(body)]})
      }
    })
  }

  // On component mount, request posts from the API.
  componentDidMount () {
    this.loadNewPosts()
  }

  // When using navigation buttons, request next page.
  handlePageChange (e) {
    var nextPage = this.state.page
    e === 'forward' ? nextPage++ : nextPage--
    this.setState({page: nextPage}, () => {
      this.loadNewPosts()
    })
  }
  
  render () {
    return (
      <div className="tile">
        <div className="tileHeaderBar">
          <Link to='/'><ButtonBox label={'close'} /></Link>
          {/* Page results come in sets of ten. If fewer than ten load, we've hit the end. */}
          { this.state.posts.length === 10 ? <ButtonBox label={'forward'} handleClickFromChild={(elm) => {this.handlePageChange(elm)}}/> : null }
          {/* Do not display the 'back' button when we're on the first page. */}
          { this.state.page > 1 ? <ButtonBox label={'back'} handleClickFromChild={(elm) => {this.handlePageChange(elm)}}/> : null }
          <div className="tileHeaderText"><h1>more posts...</h1></div>
        </div>
        <div className="posts">
          {this.state.posts.map((post) => {
            return <Link to={`/writing/${post.id}`} key={post.id}><li className="postListItem"><span className="postName">{post.title}</span><span className="postDate">{new Date(post.created).toLocaleDateString()}</span></li></Link>
          })}
        </div>
      </div>
    )
  }
}

export default BlogPostSearch
