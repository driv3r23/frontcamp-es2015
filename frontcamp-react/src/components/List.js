import React, {Component} from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as postActions from '../actions/PostActions'

class List extends Component {
    componentDidMount() {
        this.props.postActions.getPost();
    }

    render() {
        return (
            <div>
                {
                    this.props.list.data.map((item, index) =>
                        <article className="blog-post" key={index}>
                            <h3>{item.title}</h3>
                            <p><a href={"/#/posts/" + item._id}>Read more</a></p>
                        </article>
                    )
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        list: state.post
    }
}

function mapDispatchToProps(dispatch) {
    return {
        postActions: bindActionCreators(postActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
