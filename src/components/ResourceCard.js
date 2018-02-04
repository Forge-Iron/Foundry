import React, { Component } from 'react';
import './components.css';


export default class ResourceCard extends Component {


    render() {
        return (
            <div className="card">
                <p className="text" > {this.props.title} </p>
                <a className="text sub" href={this.props.link} > Link </a>
            </div>
        )
    }
}