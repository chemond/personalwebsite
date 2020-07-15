import React, {Component} from "react";
import Navigation from './Navigation';
import ContactForm from './ContactForm';
import Footer from './Footer'

class Contact extends Component {
  render() {
    return (<div>
      <Navigation/>
      <div>
        <div className="">
          <h1 className="text-center">Contact</h1>
          <ContactForm/>
        </div>
      </div>
      <Footer/>
    </div>);
  }
}

export default Contact;
