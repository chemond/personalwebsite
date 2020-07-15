import React, {Component} from "react";
import Navigation from './Navigation';
import githublogo from './GitHub_Logo_White.png';
import fcclogo from './freeCodeCamp.png';
import reactlogo from './React_Logo.svg';
import nodelogo from './Node_Logo.svg';
import linkedinlogo from './LI-Logo.png';
import ButterCMS from './butter-w.png';
import saplogo from './sap-7.svg';
import Footer from './Footer'

class About extends Component {
  render() {
    return (<div>
      <Navigation/>
      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-6 col-md-8 col-sm-11 col-11">
          <div className="text-center">
            <h1>About</h1>
          </div>
          <div>
            <p>I have over 7 years of development experience. SAP software and ABAP development were my beginnings, and over the years I have worked to increase my full stack web development skills. I have grown fond of React.js in addition to Node.js, vanilla JavaScript, HTML, and CSS. I have also worked with other technologies and languages like PHP, Python, WordPress, Joomla, and Java.
            </p>
            <p>In my early years of finding my career path, I was heavily interested in technical arts including Graphic Design. This has formed a creative, yet simple and structured style to the way I design and develop. I do not like a lot of fluff and filler.</p>
          </div>
        </div>
      </div>
      <br/>
      <div className="container text-center">
        <div className="row logo-container align-items-center">
          <div className="logo col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
            <a href='https://linkedin.com' target='_blank' rel="noopener noreferrer">
              <img id="img-linkedin" src={linkedinlogo} alt="LinkedIn Logo"/>
            </a>
          </div>
          <div className="logo col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
            <a href='https://github.com/chemond' target='_blank' rel="noopener noreferrer">
              <img id="img-github" src={githublogo} alt="GitHub Logo"/>
            </a>
          </div>
          <div className="logo col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
            <img id="img-sap" src={saplogo} alt="SAP Logo"/>
          </div>

          <div className="logo col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
            <a href="https://buttercms.com" target="_blank" rel="noopener noreferrer">
              <img id="img-buttercms" src={ButterCMS} alt="Butter CMS Logo"/>
            </a>
          </div>
          <div className="logo col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
            <a href='https://www.freecodecamp.org/chemond' target='_blank' rel="noopener noreferrer">
              <img id="img-freecodecamp" src={fcclogo} alt="freeCodeCamp Logo"/>
            </a>
          </div>

          <div className="logo col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
            <a href='https://www.reactjs.org' target='_blank' rel="noopener noreferrer">
              <img id="img-react" src={reactlogo} alt="React Logo"/>
            </a>
          </div>

          <div className="logo col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
            <a href='https://www.nodejs.org' target='_blank' rel="noopener noreferrer">
              <img id="img-node" src={nodelogo} alt="Node Logo"/>
            </a>
          </div>
        </div>
      </div>
      <Footer/>
    </div>);
  }
}

export default About;
