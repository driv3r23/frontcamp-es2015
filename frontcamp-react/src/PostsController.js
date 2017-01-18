import React, {Component} from 'react';
import Post from './components/Post';
import Posts from './components/Posts';

class PostsController extends Component {
    render() {
        return this.props.params.postId ? <Post id={this.props.params.postId} /> : <Posts />
    }
}

export default PostsController;
