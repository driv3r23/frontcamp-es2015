import React, {Component} from 'react';
import './Posts.css';

class Posts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        fetch('https://frontcamp-khvainitski.herokuapp.com/api/posts').then(r => r.json())
            .then((data) => {
                this.setState({posts: data})
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (
            <div>
                {
                    this.state.posts.map((item, index) =>
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


export default Posts;
