import React, {Component} from 'react';
import Post from './Post';
import './Posts.css';

class Posts extends Component {
    constructor() {
        super();

        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        fetch('http://frontcamp-khvainitski.herokuapp.com/api/posts').then(r => r.json())
            .then((data) => {
                this.setState({posts: data.posts})
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (
            <div>
                {this.state.posts.map((item, index) =>
                    <Post key={item._id} item={item}/>
                )}
            </div>
        );
    }
}

export default Posts;
