import React, { Component } from 'react';
import './components.css';


export default class ResourceCard extends Component {


    render() {
        return (
            <div className="card">
                <p className="text" > Title of the thing </p>
                <a className="text sub" href="#"> Link </a>
            </div>
        )
    }
}