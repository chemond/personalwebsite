import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import butter from './butter-client'
import Navigation from './Navigation'
import Footer from './Footer'

import ButterCMS from './butter-w.png'

class Blog extends Component {
  state = {
    meta: {},
    data: []
  }
  async componentDidMount() {

    const {match} = this.props
    let page = match.params.page || 1

    const resp = await butter.post.list({page: page, page_size: 10})
    this.setState(resp.data)

  }
  render() {
    const {next_page, previous_page} = this.state.meta

    return (<div>
      <Navigation/>
      <h1 className="text-center">Blog</h1>

      {
        this.state.data.map((post, key) => {
          return (<div key={key} className="blog-post-preview text-center row justify-content-center">
            <div className="col-xl-6 col-lg-6 col-md-8 col-sm-12 col-12">
              <div className="blog-link">
                <Link to={`/blog/posts/${post.slug}`}>
                  <img src={post.featured_image} alt="" className="blog-image"></img>
                  <br/> {post.title}</Link>
              </div>

              <div>{post.summary}</div>
            </div>
          </div>)
        })
      }

      <br/>

      <div className="text-center">
        {
          previous_page && (<Link to={`/blog/${previous_page}`}>
            <a>Prev</a>
          </Link>)
        }

        {
          next_page && (<Link to={`/blog/${next_page}`}>
            <a>Next</a>
          </Link>)
        }
        <br/>

        <a href="https://buttercms.com" target="_blank" rel="noopener noreferrer">
          <img id="img-buttercms" src={ButterCMS} alt="Butter CMS Logo"/>
        </a>
      </div>
      <Footer/>
    </div>)
  }
}

export default Blog
