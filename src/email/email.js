import React, {Component} from 'react';
import {AppServices} from "../App.services";
import './../App.css'

class Email extends Component {
    appService = new AppServices()

    state = {
        user: ''
    }

   async componentDidMount() {
        let id = this.props.idItem
       let user = await this.appService.getEmail(id)
       this.setState({user})
    }


    render() {
        let {user} = this.state
        console.log(user);
        return (
            <div className='emailBlock'>
                <p>Email: {this.state.user.email}</p>
                <p>Phone: {this.state.user.phone}</p>
                <p>Username: {this.state.user.username}</p>

            </div>
        );
    }
}

export default Email;
