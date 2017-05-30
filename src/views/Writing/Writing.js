import React, { Component } from 'react'
import './Writing.css'
import BlogPost from '../../components/blog-post/BlogPost'
import BlogPostSearch from '../../components/blog-post-search/BlogPostSearch'
import qs from 'qs'


class Writing extends Component {
  render() {
    const search = qs.parse(this.props.location.search)['?search']
    return (
      <div className="writingPageContainer">
        { search !== 'true' ? <BlogPost id={this.props.match.params.id} /> : <BlogPostSearch /> }
      </div>
    )
  }
}

export default Writing
