import React, { Component } from 'react'
import mm1 from '../img/macmm1.png'
import classic1 from '../img/classic1.png'
import Pizzeria from '../img/pizzeria.png'
import myreads from '../img/myreads.png'
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
                                <h2 className="project-name">Memory-Game</h2>
                            </a>
                        </div>
                        <div className="col-md-6 col-sm-12 hover">
                            <a className="click" href="#">
                                <img className="project-image" alt="classic-arcade-game" src={classic1} ></img>
                                <h2 className="project-name">Classic-Arcade-Game</h2>
                            </a>
                        </div>
                        <div className="col-md-6 col-sm-12 hover">
                            <a className="click" href="#">
                                <img className="project-image" alt="Pizzeria" src={Pizzeria} ></img>
                                <h2 className="project-name">Pizzeria</h2>
                            </a>
                        </div>
                        <div className="col-md-6 col-sm-12 hover">
                            <a className="click" href="#">
                                <img className="project-image" alt="React-Myreads" src={myreads} ></img>
                                <h2 className="project-name">React-Myreads</h2>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}
