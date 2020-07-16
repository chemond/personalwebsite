import React, {Component} from 'react';
/* Import Components */
import Input from './components/Input/Input';
import TextArea from './components/TextArea/TextArea';
import Button from './components/Button/Button'

class ContactForm extends Component {

  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const {status} = this.state;
    return (<div className="col-xl-6 col-lg-6 col-md-8 col-sm-12 col-12 ml-auto mr-auto">
      <form onSubmit={this.submitForm} action="https://formspree.io/mpzyydql" method="POST">
        <label for="name" className="form-label" style={{
            paddingTop: 1 + "em"
          }}>Name</label>
        <input type="name" name="name" placeholder="Who are you?"/>
        <label for="email" className="form-label" style={{
            paddingTop: 1 + "em"
          }}>Email</label>
        <input type="email" name="email" placeholder="How can I contact you?"/>
        <label for="message" className="form-label" style={{
            paddingTop: 1 + "em"
          }}>Message</label>
        <textarea type="text" name="message" placeholder="What can I help you with?" cols="30" rows="5"/>
        <div className="text-center">
          {
            status === "SUCCESS"
              ? <p>Thanks!</p>
              : <button className="btn btn-warning">Submit</button>

          }
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </div>
      </form>

    </div>);
  }
  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) 
        return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({status: "SUCCESS"});
      } else {
        this.setState({status: "ERROR"});
      }
    };
    xhr.send(data);
  }
}

export default ContactForm;
