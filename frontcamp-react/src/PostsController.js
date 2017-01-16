import React, {Component} from 'react';
import Post from './Post';
import Posts from './Posts';

class PostsController extends Component {
    render() {
        return this.props.params.postId ? <Post id={this.props.params.postId} /> : <Posts />
    }
}

export default PostsController;
