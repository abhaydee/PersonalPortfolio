import React, { Component } from 'react'
import d from '../img/htmllogo.png' 
import css from '../img/csslogo.jpg'
import js from '../img/jslogo.png'
import react from '../img/react.png'
import reduxsaga from '../img/redux-saga.png'
import reactnative from '../img/react-native.jpg'
import angular from '../img/angular.png'
import node from '../img/node.png'

export default class Projects extends Component {
    render() {
        return (
          <section className="brand-area">
             <div className="container-fluid">
                 <div className="row">
                    <div className="col-xl-6 col-lg-12 col-md-12">
                       <div className="row">
                            <div className="col-lg-4 col-md-4 col-md-6">
                               <div className="single-brand">
                                   <img src={d} width="50%" height="50%" alt="html5-logo"></img>
                               </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-md-6">
                               <div className="single-brand">
                                   <img src={css} width="50%" height="50%" alt="css-logo"></img>
                               </div>
                            </div> 
                            <div className="col-lg-4 col-md-4 col-md-6">
                               <div className="single-brand">
                                   <img src={js} width="50%" height="50%" alt="js-logo"></img>
                               </div>
                            </div>  
                            <div className="col-lg-4 col-md-4 col-md-6">
                               <div className="single-brand">
                                   <img src={react} width="50%" height="50%" alt="react-logo"></img>
                               </div>
                            </div>  
                            <div className="col-lg-4 col-md-4 col-md-6">
                               <div className="single-brand">
                                   <img src={reduxsaga} width="50%" height="50%" alt="reduxsaga-logo"></img>
                               </div>
                            </div>  
                            <div className="col-lg-4 col-md-4 col-md-6">
                               <div className="single-brand">
                                   <img src={reactnative} width="50%" height="50%" alt="reactnative-logo"></img>
                               </div>
                            </div>  
                            <div className="col-lg-4 col-md-4 col-md-6">
                               <div className="single-brand">
                                   <img src={angular} width="50%" height="50%" alt="angular-logo"></img>
                               </div>
                            </div>  
                            <div className="col-lg-4 col-md-4 col-md-6">
                               <div className="single-brand">
                                   <img src={node} width="50%" height="50%" alt="node-logo"></img>
                               </div>
                            </div>  
                               
                        </div> 
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-12">
                        
                    </div>
                </div>
            </div> 
          </section>
        )
    }
}
