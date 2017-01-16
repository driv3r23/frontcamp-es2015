import React, {Component} from 'react';

class App extends Component {
    render() {
        return (
            <header>
                <h1>FrontCamp</h1>
                <nav>
                    <a href="/#/posts">Posts</a>
                </nav>
                <main>
                    {this.props.children}
                </main>
            </header>
        );
    }
}

export default App;
