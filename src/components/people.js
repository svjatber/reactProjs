import React, {Component} from 'react';

import  { Switch, Route, withRouter, NavLink} from "react-router-dom";
import {AppServices} from "../App.services";


class People extends Component {

    state = {
        people: []
    }

    appService = new AppServices()
    async componentDidMount() {
        let people = await this.appService.getPeople();
        this.setState({people})
    }

    render() {

let {people} =this.state
        return (
            <div >

                {
                    people.map((v)=>{
                    return (
                    <h2>{v.name}</h2>
                    )
                })
                }


            </div>

        );
    }

}

export default withRouter(People);
