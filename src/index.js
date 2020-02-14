import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Resume from './Components/Resume';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import logo from './img/logo.png'
import About from './Components/About';
import Work from './Components/Work';
const routing=(
    <div>
       <BrowserRouter>
         <header className="header-area">
            <div className="main-menu">
            <nav className="navbar navbar-expand-lg navbar-light ">
            <Link className="navbar-brand" to="/"><img src={logo} alt="logo" /></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="mr-auto"></div>
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link className="nav-link a" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link a" to="/About">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link a"  to="/Projects">Tech Stack</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link a" to="/Contact">Contact</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link a" to="/Work">MY-Work</Link>
                </li>
               
                </ul>
                </div>
            </nav>
            </div>
         </header>
       <Route exact path="/" component={App}></Route>
       <Route exact path="/Resume" component={Resume}></Route>
       <Route exact path="/Projects" component={Projects}></Route>
       <Route exact path="/Contact" component={Contact}></Route>
       <Route exact path="/About" component={About}></Route>
       <Route exact path="/Work" component={Work}></Route>

       </BrowserRouter> 
    </div>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
