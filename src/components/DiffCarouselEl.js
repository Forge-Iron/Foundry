import React, { Component } from 'react';
import './components.css';

export default class DiffElement extends Component {


    render() {
        return (
            <div><p className="text" style={{ color: this.props.color }}> {this.props.diff} </p></div>
        )
    }
}