import React, { Component } from 'react';

import './App.css';

class App extends Component{
  render(){
    return(
      <div>
          <section id="abhay">
              <div className="row">
                <div className="col-md-6 mx-auto " >
                  <img src="https://www.mediafire.com/convkey/0a32/g66w3st6x0fu6pozg.jpg" width="50%" height="50%" alt="myavatar" style={{maxWidth:'100%',height:'auto',objectFit:'contain'}}></img>
                </div>
                <div className="col-md-6 mx-auto " >
                <img  alt="Developer Workspace" src="https://i.pinimg.com/originals/92/cd/56/92cd5659dc54116e9b3d89a2db31e5aa.gif"/>
                </div>
              </div>
          </section>
      </div>
    )
  }
}

export default App;
