import React, {Component} from 'react';

import  { Switch, Route, withRouter, NavLink} from "react-router-dom";
import {AppServices} from "../App.services";



class Planets extends Component {

    state = {
        planets: []
    }

    appService = new AppServices()
    async componentDidMount() {
        let planets = await this.appService.getPlanets();
        this.setState({planets})
    }

    render() {

let {planets} = this.state
        return (
            <div >

                {
                    planets.map((v)=>{
                        return (
                            <h2>{v.name}</h2>
                        )
                    })
                }


            </div>

        );
    }

}

export default withRouter(Planets);
