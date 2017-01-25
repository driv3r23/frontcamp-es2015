import React, {Component} from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
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
                            <p><Link to={"/posts/" + item._id}>Read more</Link></p>
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
