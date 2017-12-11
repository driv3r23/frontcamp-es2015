import React, {Component} from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as postActions from '../actions/PostActions'

class Post extends Component {
    componentDidMount() {
        this.props.postActions.getPost(this.props.match.params.id);
    }

    render() {
        const post = this.props.post.data;

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

function mapStateToProps(state) {
    return {
        post: state.post
    }
}

function mapDispatchToProps(dispatch) {
    return {
        postActions: bindActionCreators(postActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)