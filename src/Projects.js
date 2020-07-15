import React, {Component} from "react";
import Navigation from './Navigation';
import ToastmastersImg from './toastmastersimg.png'
import ColbyAndEmily from './colbyandemily.png'
import TestStore from './test-store.png'
import UVFlag from './uvflag.png'
import Footer from './Footer'

class Projects extends Component {
  render() {
    return (<div>
      <Navigation/>
      <h1 className="text-center">Projects</h1>
      <div className="">
        <div className="row justify-content-center">
          <div className="card">
            <img src={TestStore} alt="ch-test-store.netlify.app"/>
            <a href="http://ch-test-store.netlify.com" target="_blank" rel="noopener noreferrer" className="stretched-link">
              <span className="project-tile-text">Test Store</span>
            </a>
            <p>An HTML and CSS website utilizing Bootsrap for responsive behavior. SnipCart for e-commerce</p>
            <p>A test website I created to test out and work with SnipCart, which is an extremely simple way to implement e-commerce into a static website.</p>
          </div>
          <div className="card">
            <img src={UVFlag} alt="uv-flag.netlify.app"/>
            <a href="http://uv-flag.netlify.com" target="_blank" rel="noopener noreferrer" className="stretched-link">
              <span className="project-tile-text">Upper Valley Flag</span>
            </a>
            <p>An HTML and CSS website utilizing Bootsrap for responsive behavior.</p>
            <p>Created to boost awareness of the community through the unity of a flag.</p>
          </div>
          <div className="card">
            <img src={ColbyAndEmily} alt="colbyandemily.com"/>
            <a href="http://colbyandemily.com" target="_blank" rel="noopener noreferrer" className="stretched-link">
              <span className="project-tile-text">The Hemonds</span>
            </a>
            <p>An HTML and CSS website utilizing Bootsrap for responsive behavior.</p>
            <p>A personal website that showcases the couples photos from their engagement, wedding, and travels.</p>
          </div>
          <div className="card">
            <img src={ToastmastersImg} alt="cherrycapitaltm.org"/>
            <a href="http://cherrycapitaltm.org" target="_blank" rel="noopener noreferrer" className="stretched-link">
              <span className="project-tile-text">Cherry Capital Toastmasters</span>
            </a>
            <p>A Joomla website with custom developed components.</p>
            <p>Created for the Toastmasters Club in Traverse City, MI.</p>
          </div>

        </div>

      </div>
      <Footer/>
    </div>);
  }
}

export default Projects;
