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
