import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import H from './components/h_component';

class App extends Component {
    state = {
        loading: false,
        currColor: 0,
        colors: [
            { hex: '000000' },
        ],
    };

    componentDidMount() {
        this.getRandomColor();
        this.getRandomColor();
    }

    addColorToList(color) {
        const colorsCopy = this.state.colors.slice();
        colorsCopy.push(color);

        this.setState({ colors: colorsCopy });
    }

    getRandomColor() {
        fetch('http://www.colr.org/json/color/random')
            .then(resp => resp.json())
            .then(res => this.addColorToList({ hex: res.colors[0].hex }));
    }

    onClickChangeColor = () => {
        if (this.state.currColor === 0) {
            const min = 1;
            const max = 3;
            const rand = parseInt(min + ((Math.random()) * (max - min)), 10);
            this.setState({ currColor: rand });
        } else {
            this.setState({ currColor: 0 });
        }
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <H text="Welcome" click={() => this.onClickChangeColor()} color={`#${this.state.colors[this.state.currColor].hex}`} />
                </div>
            </div>
        );
    }
}

export default App;
