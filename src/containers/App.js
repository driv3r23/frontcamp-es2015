import React, {Component} from 'react'
import { connect } from 'react-redux'

class App extends Component {
    render() {
        const { title } = this.props.app;

        return (
            <div>
                <h1>{ title }</h1>
                {this.props.children}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        app: state.app
    }
}

export default connect(mapStateToProps)(App)
