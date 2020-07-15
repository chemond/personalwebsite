import React from 'react'
import butter from './butter-client'
import {Helmet} from 'react-helmet'
import Navigation from './Navigation'
import Footer from './Footer'

import ButterCMS from './butter-w.png'

export default class extends React.Component {
  state = {
    data: {}
  }
  async componentDidMount() {

    const {match} = this.props
    const resp = await butter.post.retrieve(match.params.slug)
    this.setState(resp.data)
  }
  render() {
    const post = this.state.data

    return (<div>
      <Helmet>
        <title>{post.seo_title}</title>
        <meta name='description' content={post.meta_description}/>
        <meta name='og:image' content={post.featured_image}/>
      </Helmet>
      <Navigation/>
      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-6 col-md-8 col-sm-11 col-11">
          <h1 className="text-center">{post.title}</h1>

          <img src={post.featured_image} alt="" className="blog-image"></img>

          <br/>
          <p dangerouslySetInnerHTML={{
              __html: post.body
            }}/>
        </div>
      </div>
      <br/>
      <div className="text-center">
        <a href="https://buttercms.com" target="_blank" rel="noopener noreferrer">
          <img id="img-buttercms" src={ButterCMS} alt="Butter CMS Logo"/>
        </a>
      </div>
      <Footer/>
    </div>)
  }
}
