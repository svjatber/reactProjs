import React, {Component} from 'react';

import  { Switch, Route, withRouter, NavLink} from "react-router-dom";
import AllUser from "./AllUsers/AllUser";
import Home from "./Home/Home";

class App extends Component {


    render() {


    return (
        <div className='mainBlock'>

        <NavLink to={'/users'}><span>Users</span></NavLink>
            <NavLink to={'/home'}><span>Home</span></NavLink>
        <Switch>
            <Route path={'/users'} render={(props)=>{
                return <AllUser props={props}/>
            }} />
            <Route path={'/home'} render={()=>{
                return <Home />
            }} />
        </Switch>
    </div>

    );
  }

}

export default withRouter(App);
