import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Resume from './Components/Resume';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

const routing=(
    <div>
       <BrowserRouter>
       <nav className="navbar navbar-expand-lg navbar-dark p-0" style={{'background':'rgb(10, 25, 47)','color':'rgb(100, 255, 218)'}}>
       <a className="navbar-brand " href="#" routerLink="" style={{'color':'rgb(100, 255, 218)','paddingRight':'1%','borderRight': '1px solid grey','height': '40px'}}>Abhay Deshpande</a>
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse navbar navbar-right" id="navbarNav" >
        <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link"><img src="https://media-cdn.tripadvisor.com/media/photo-s/13/29/3a/c8/logo.jpg" alt="" width="80"/></Link>
          
        </li>
        <li className="nav-item Resume1" style={{'marginTop': '2%'}}>
          <Link style={{'color':'rgb(100, 255, 218)'}} to="/Resume" className="nav-link navbar-brand"   id="Resume">Resume</Link>
        </li>
        <li className="nav-item Projects1" style={{'marginTop': '2%'}} >
          <Link style={{'color':'rgb(100, 255, 218)'}} to="/Projects" className="nav-link navbar-brand" id="Projects">Projects</Link>
        </li>
        <li className="nav-item contact1" style={{'marginTop': '1%'}} id="contact" >
          <Link style={{'color':'rgb(100, 255, 218)'}} className="nav-link"  to="/Contact"  >Contact<i className="fa fa-shopping-cart" aria-hidden="true"></i></Link>

        </li>
        </ul>
        </div>
       </nav>
       <Route exact path="/" component={App}></Route>
       <Route exact path="/Resume" component={Resume}></Route>
       <Route exact path="/Projects" component={Projects}></Route>
       <Route exact path="/Contact" component={Contact}></Route>
       </BrowserRouter> 
    </div>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
