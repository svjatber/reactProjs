import React, {Component} from 'react';

import  { withRouter} from "react-router-dom";
import {AppServices} from "../App.services";


class Species extends Component {

    state = {
       species: []
    }

    appService = new AppServices()
    async componentDidMount() {
        let species = await this.appService.getSpecies();
        this.setState({species})
    }

    render() {

        let {species} = this.state
        return (
            <div >

                {
                    species.map((v)=>{
                        return(
                            <h2>{v.name}</h2>
                        )
                    })
                }


            </div>

        );
    }

}

export default withRouter(Species);
