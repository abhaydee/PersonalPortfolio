import React, { Component } from 'react'
import d from '../img/htmllogo.png' 
import css from '../img/csslogo.jpg'
import js from '../img/jslogo.png'
import react from '../img/react.png'
import reduxsaga from '../img/redux-saga.png'
import reactnative from '../img/react-native.jpg'
import angular from '../img/angular.png'
import node from '../img/node.png'
import avatar from '../img/avatar.jpg'
import '../App.css'
export default class Projects extends Component {

    render() {
        return (
        <section className="site-main">
          <section className="brand-area">
             <div className="container-fluid">
                 <div className="row first-row">
                    <div className="col-xl-6 col-lg-12 col-md-12">
                       <div className="row">
                            <div className="col-lg-4 col-md-4 col-md-6">
                               <div className="single-brand">
                                   <img src={d}  alt="html5-logo"></img>
                               </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-md-6">
                               <div className="single-brand">
                                   <img src={css}  alt="css-logo"></img>
                               </div>
                            </div> 
                            <div className="col-lg-4 col-md-4 col-md-6">
                               <div className="single-brand">
                                   <img src={js}  alt="js-logo"></img>
                               </div>
                            </div>  
                            <div className="col-lg-4 col-md-4 col-md-6">
                               <div className="single-brand">
                                   <img src={react}  alt="react-logo"></img>
                               </div>
                            </div>  
                            <div className="col-lg-4 col-md-4 col-md-6">
                               <div className="single-brand">
                                   <img src={reduxsaga}  alt="reduxsaga-logo"></img>
                               </div>
                            </div>  
                            <div className="col-lg-4 col-md-4 col-md-6">
                               <div className="single-brand">
                                   <img src={reactnative}  alt="reactnative-logo"></img>
                               </div>
                            </div>  
                            <div className="col-lg-4 col-md-4 col-md-6">
                               <div className="single-brand">
                                   <img src={angular}  alt="angular-logo"></img>
                               </div>
                            </div>  
                            <div className="col-lg-4 col-md-4 col-md-6">
                               <div className="single-brand">
                                   <img src={node}  alt="node-logo"></img>
                               </div>
                            </div>  
                               
                        </div> 
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-12 right-side">
                        <div className="d-flex flex-row name-area">
                            <h2 className="name">Abhay Deshpande</h2>
                            
                        </div>
                        <div className="d-flex flex-row ">
                        <img src={avatar} alt="profile" className="avatar"></img>
                        </div>
                    </div>
                </div>
            </div> 
          </section>
          </section>
        )
    }
}
