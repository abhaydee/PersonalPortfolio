import React, { Component } from 'react'
import mm1 from '../img/macmm1.png'
import classic1 from '../img/classic1.png'
import '../App.css'
export default class Work extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <h1 className="myprojects">My Projects</h1>
                    <br/>
                    <div className="row row1 ">
                        <div className="col-md-6 col-sm-12 hover">
                            <a className="click" href="#">
                                <img className="project-image" alt="memory-game" src={mm1} ></img>
                            </a>
                        </div>
                        <div className="col-md-6 col-sm-12 hover">
                            <a className="click" href="#">
                                <img className="project-image" alt="classic-arcade-game" src={classic1} ></img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
