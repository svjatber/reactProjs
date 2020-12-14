import React, {Component} from 'react';
import Post from "../post/post";

class AllPosts extends Component {
    render() {
        let {chosePosts,deletePost} = this.props
        console.log(deletePost)
        return (

            <div className='postBlock'>
                {
                    chosePosts.map((v)=>{
                        return (
                            <Post post={v} key={v.index}/>
                        )
                    })
                }
                <button className='' onClick={deletePost}>Delete</button>
            </div>
        );
    }
}

export default AllPosts;
