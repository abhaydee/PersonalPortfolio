import React, { Component } from 'react'
import aboutus from '../img/about-us.png'
import "../App.css"
export default class About extends Component {
    render() {
        return (
            <section className="site-main">
            <section className="about-area">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-image">
                                <img src={aboutus} alt="aboutus" className="img-fluid"/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 about-title">
                            <h2 className="text-uppercase pt-5">
                                <span>About Me</span>
                            </h2>
                            <div className="paragraph" py-4 w-75>
                                <p className="para">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque, ex sed hendrerit dignissim, neque nisl molestie sapien, ut facilisis arcu turpis quis lorem. Morbi vehicula scelerisque tellus, vel congue neque mattis nec. Curabitur rutrum tincidunt dui ut viverra. Fusce est est, imperdiet non tellus sit amet, ullamcorper viverra lorem. Vestibulum eget ligula quis mi ornare rhoncus quis eu diam. Curabitur ornare sit amet nulla blandit ultricies 
                                </p>
                                <p className="para">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque, ex sed hendrerit dignissim, neque nisl molestie sapien, ut facilisis arcu turpis quis lorem. Morbi vehicula scelerisque tellus, vel congue neque mattis nec. Curabitur rutrum tincidunt dui ut viverra. Fusce est est, imperdiet non tellus sit amet, ullamcorper viverra lorem. Vestibulum eget ligula quis mi ornare rhoncus quis eu diam. Curabitur ornare sit amet nulla blandit ultricies
                                </p>
                            </div>
                            <div className="button"><button type="button" className="btn button primary-button text-uppercase">Download CV</button></div>
                        </div>
                    </div>
                </div>
            </section>  
            </section> 
        )
    }
}
