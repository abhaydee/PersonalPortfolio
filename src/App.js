import React, { Component } from 'react';

import './App.css';

class App extends Component{
  render(){
    return(
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
                    <div className="d-flex flex-row flex-wrap">
                      <button type="button" className="btn button primary-button mr-4 text-uppercase">Hire Me</button>
                      <button type="button" className="btn button secondary-button text-uppercase">Get CV</button>
                    </div>
                  </div>
                 </div>
                 <div className="col-lg-6 col-md-12">

                 </div>

               </div>
             </div>
           </section>
         </main>
      </div>
    )
  }
}

export default App;
