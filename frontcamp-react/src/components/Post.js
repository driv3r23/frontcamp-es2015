import React, {Component} from 'react';

class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post: []
        };
    }

    componentDidMount() {
        fetch(`https://frontcamp-khvainitski.herokuapp.com/api/posts/${this.props.params.id}`).then(r => r.json())
            .then((data) => {
                this.setState({post: data})
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        const post = this.state.post;

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
