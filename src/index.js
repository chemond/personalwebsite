import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import Homepage from './Homepage';
import Blog from './Blog';
import BlogPost from './BlogPost';
import About from './About'
import Contact from './Contact'
import Projects from './Projects'

const AppRouter = () => (<Router>
  <div>
    <Route path='/' exact="exact" component={Homepage}/>
    <Route path='/blog/:page' exact="exact" component={Blog}/>
    <Route path='/blog' exact="exact" component={Blog}/>
    <Route path='/blog/posts/:slug' component={BlogPost}/>
    <Route path='/about' component={About}/>
    <Route path='/contact' component={Contact}/>
    <Route path='/projects' component={Projects}/>
  </div>
</Router>)

ReactDOM.render(<React.StrictMode>
  <AppRouter/>
</React.StrictMode>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
