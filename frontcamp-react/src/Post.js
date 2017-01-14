import React, {Component} from 'react';
import './Posts.css';

class Post extends Component {
    render() {
        const post = this.props.item;

        return (
            <article className="blog-post">
                {post.image && <img className="img-thumbnail" src={post.image} height="300"/>}
                <h2 className="blog-post-title">{post.title}</h2>
                <p className="blog-post-meta">{post.author}</p>
                <p>{post.body}</p>
            </article>
        );
    }
}

export default Post;
