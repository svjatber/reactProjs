import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './../App.css'


class User extends Component {
    render() {
        let {user,choosePosts} = this.props
        console.log(choosePosts)
        return (
            <div className='userBlock'>
               <p>{user.name}</p>

                <button onClick={()=>choosePosts(user.id)}>Post</button>
                <Link to={'/users' + '/' + user.id}><span>Email</span></Link>
            </div>
        );
    }
}

export default User;
