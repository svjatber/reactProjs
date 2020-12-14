import React, {Component} from 'react';


class Post extends Component {
    render() {
        let {post} = this.props
        console.log(post)
        return (
            <div>
               <div>{post.body}</div>
            </div>
        );
    }
}

export default Post;
