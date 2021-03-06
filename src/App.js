import React, { Component } from 'react';
import banner from './img/banner/banner-image.png'
import './App.css';
import About from './Components/About';
import Projects from './Components/Projects';

class App extends Component{
  render(){
    return(
      <div>
      <div>
         <main className="site-main">
           <section className="site-banner">
             <div className="container">
               <div className="row">
                 <div className="col-lg-6 col-md-12 site-title">
                  <h3 className="title-text">Hey</h3>
                  <h1 className="title-text text-uppercase">I am Abhay</h1>
                  <h4 className="title-text text-uppercase">Full Stack Developer</h4>
                  <div className="side-buttons">
                    <div className="d-flex flex-row flex-wrap button">
                      <button type="button" className="btn button primary-button mr-4 text-uppercase">Hire Me</button>
                      <button type="button" className="btn button secondary-button text-uppercase">Get CV</button>
                    </div>
                  </div>
                 </div>
                 <div className="col-lg-6 col-md-12 banner-image">
                    <img src={banner} alt="banner-img" className="img-fluid"></img>
                 </div>

               </div>
             </div>
           </section>
         </main>
      </div>
      <About></About>
      <Projects></Projects>
      </div>
     
    )
  }
}

export default App;
