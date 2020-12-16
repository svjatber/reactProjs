import React, {Component} from 'react';
import {AppServices} from "../App.services";


class Forms extends Component {
    service = new AppServices()
    state = {
        value0: '',
        user: null,
        error: '',
        load: ''

    }

    changeValueInput = (e) =>{
        this.setState({value0: e.target.value})
    }
    getId = async (e) => {
        e.preventDefault()
        let {value0} = this.state
        this.service.getUserById(+value0)
            .then(user =>{
                this.setState({load: 'loading'})
                setTimeout(()=>{
                    console.log(user)
                    this.setState({user})
                    this.setState({load: ''})
                }, 3000)
            })
            .catch((err)=> this.onError(err))
    }
    onError =(err)=>{
        this.setState({error: 'Enter correct num', user: null, value0: ''})
    }

    render() {
        const {value0,user,error,load} = this.state
        return (

            <div>
                <form onSubmit={this.getId}>
                    <input type="text" value={value0} onChange={this.changeValueInput}/>
                    <button>Add</button>
                </form>
            <div>{user ? user.name : error}<p>{load}</p></div>


            </div>
        );
    }
}

export default Forms;
