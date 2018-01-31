

import React, { Component } from 'react';
import './components.css';
import reactHashAvatar from 'react-hash-avatar'
import { LineChart } from 'react-chartkick';

import gradient from 'random-gradient'



export default class RepoCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pattern: null,
        }

    }

    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var colors = ["#7286A0", "#EE6055", "#5296A5", "#A1CDA8", "#FE5F55", "#8BE8CB"]
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return colors[Math.floor(Math.random() * colors.length)];

    }

    render() {







        return (
            <div className="card">




                <p className="icon-text" >{this.props.name} </p>
                <p className="description-text">{this.props.description}</p>



            </div>
        )
    }
}