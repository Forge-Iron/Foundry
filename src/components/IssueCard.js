

import React, { Component } from 'react';
import './components.css';
import reactHashAvatar from 'react-hash-avatar'




export default class IssueCard extends Component {
    constructor(props) {
        super(props)


    }

    render() {

        var Trianglify = require('trianglify');
        var pattern = Trianglify({ width: 900, height: 900 })


        return (
            <div>

                <img className="icon-image" src={pattern.png()} />
                <p className="icon-text" >{this.props.name} - {this.props.description}</p>

            </div>
        )
    }
}