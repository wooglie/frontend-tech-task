import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import H from './components/h_component';

class App extends Component {
    state = {
        loading: false,
        colors: [],
    };


    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <H text="Welcome" />
                </div>
            </div>
        );
    }
}

export default App;
