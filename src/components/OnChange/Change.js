import React, { Component } from 'react';

export default class Change extends Component {
    constructor(props) {
        super(props);

        this.state = {
            changeValue: 'typing...'
        };
    }
    handleChangeValue = (e) => {
        this.setState({
            changeValue: e.target.value
        });
    };
    render() {
        const { changeValue } = this.state;
        return (
            <div>
                <input type="text" onChange={this.handleChangeValue} placeholder="type...." />
                <h1>{changeValue}</h1>
            </div>
        );
    }
}
