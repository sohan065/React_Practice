import React, { Component } from 'react';

export default class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }
    handleCountIncrement = () => {
        this.setState({
            count: this.state.count + 1
        });
    };
    handleCountDecrement = () => {
        this.setState({
            count: this.state.count - 1
        });
    };
    render() {
        const { count } = this.state;
        return (
            <div>
                <h1>{count}</h1>
                <button onClick={this.handleCountIncrement}>Count++</button>
                <button onClick={this.handleCountDecrement} disabled={count === 0 ? true : false}>
                    Count--
                </button>
            </div>
        );
    }
}
