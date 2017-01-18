import React, {Component} from 'react'
import { connect } from 'react-redux'

class App extends Component {
    render() {
        const { title, nav } = this.props.app;

        return (
            <header>
                <h1>{ title }</h1>
                <nav>
                    <a href="/#/posts">{ nav }</a>
                </nav>
                <main>
                    {this.props.children}
                </main>
            </header>
        );
    }
}

function mapStateToProps(state) {
    return {
        app: state.app
    }
}

export default connect(mapStateToProps)(App)
