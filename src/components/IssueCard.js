

import React, { Component } from 'react';
import './components.css';
import reactHashAvatar from 'react-hash-avatar'




export default class IssueCard extends Component {
    constructor(props) {
        super(props)


    }

    render() {

        var Trianglify = require('trianglify');
        var pattern = Trianglify({ cell_size: 30, width: 1000, height: 900 })


        return (
            <div>

                <img className="icon-image" src={pattern.png()} />


                <p className="icon-text" >{this.props.name} </p>
                <p className="description-text">{this.props.description}</p>



            </div>
        )
    }
}