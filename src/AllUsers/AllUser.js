import React, {Component} from 'react';
import './../App.css'



import {AppServices} from "../App.services";
import User from "../user/user";

import {Route, Switch} from "react-router-dom";
import Email from "../email/email";
import AllPosts from "../AllPosts/AllPosts";


class AllUser extends Component {



    userService = new AppServices()
    state = {
        users: [],
        chosePosts: null
    }

    async componentDidMount() {
        await this.userService.getUser().then(users => this.setState({users}))
    }

    choosePosts = async(id)=>{

        const chosePosts = await this.userService.choosePosts(id)
        this.setState({chosePosts})
    }

    deletePost = () =>{
        this.setState({chosePosts: null})
    }

    render() {
        let {match:{url}} = this.props.props
        let {users,chosePosts} = this.state
        console.log(chosePosts)
        return (
                <div className='wrapper'>
                    <div className={'block1'}>
                        {
                            users.map((v)=>{
                                return (
                                    <User user={v} choosePosts={this.choosePosts} key={v.index}/>
                                )
                            })
                        }
                    </div>

                    <div className='block2'>
                       <Switch>

                           <Route path={url + '/:id'} exact={true} render={(props)=>{
                               let {match:{params:{id}}} = props
                               return <Email idItem={id} key={id}/>
                           }} />

                       </Switch>
                    </div>


                    <div className='block3'>
                        {
                          this.state.chosePosts ? <AllPosts chosePosts={chosePosts} deletePost={this.deletePost}/> : null
                        }

                    </div>
                </div>


        );
    }

}

export default AllUser;
