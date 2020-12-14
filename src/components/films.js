import React, {Component} from 'react';
import {AppServices} from "../App.services";





class Films extends Component {

    state = {
        films: []
    }
    appService = new AppServices()
    async componentDidMount() {
        let films = await this.appService.getFilms();
        this.setState({films})
    }

    render() {

let {films} = this.state
        return (
            <div >

                {
                  films.map((v)=>{
                      return (
                          <h2>{v.title}</h2>
                      )
                  })
                }

            </div>

        );
    }

}

export default (Films);
