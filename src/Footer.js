import React from 'react'

class Footer extends React.Component {

  render() {
    return (<div>
      <footer className="page-footer pt-4">

        <div className="container">
          <div className="row justify-content-center">

            <form className="form-inline subscribe-form" action="https://gmail.us20.list-manage.com/subscribe/post?u=410e2b7ed8bef12a381022d9e&amp;id=1b97af7a9a" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" novalidate="novalidate">

              <label className="sr-only" htmlfor="inlineFormInputGroupUsername2">Email</label>
              <div className="input-group mb-2 mr-sm-2">

                <input type="email" className="form-control" name="EMAIL" placeholder="Email"/></div>
              <div hidden="true">
                <input type="text" name="b_410e2b7ed8bef12a381022d9e_1b97af7a9a" tabindex="-1" value=""/>
              </div>
              <button type="submit" className="btn btn-warning mb-2" name="subscribe" value="Subscribe">Subscribe</button>
            </form>

          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          <span>© 2020 Copyright</span>

          <a className="logo-link" href="https://colbyhemond.me/">
            colbyhemond.me</a>
        </div>

      </footer>
    </div>)

  }
}

export default Footer;
