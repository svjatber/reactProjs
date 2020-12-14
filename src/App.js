import React, {Component} from 'react';

import  { Switch, Route, withRouter, NavLink} from "react-router-dom";
import Films from "./components/films";
import Planets from "./components/planets";
import Species from "./components/species";
import People from "./components/people";



class App extends Component {


    render() {


    return (
        <div className='mainBlock'>

            <NavLink to={'/films'}>Films </NavLink>
            <NavLink to={'/planets'}>Planets</NavLink>
            <NavLink to={'/species'}>Species</NavLink>
            <NavLink to={'/people'}>People</NavLink>


            <Switch>
                <Route path={'/films'}  exact={true} render={()=>{
                    return <Films />
                }}/>
                <Route path={'/planets'}  exact={true} render={()=>{
                    return <Planets />
                }}/>
                <Route path={'/species'}  exact={true} render={()=>{
                    return <Species />
                }}/>
                <Route path={'/people'}  exact={true} render={()=>{
                    return <People />
                }}/>
            </Switch>

    </div>

    );
  }

}

export default withRouter(App);
