

import React, { Component } from 'react';
import './components.css';
import reactHashAvatar from 'react-hash-avatar'




export default class IssueCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pattern: null,
        }

    }
    componentWillMount() {
        var Trianglify = require('trianglify');

        var pattern = Trianglify({ cell_size: 60, width: 1000, height: 900 })
        this.setState({
            pattern: pattern
        })
    }

    render() {




        return (
            <div >

                < img
                    onClick={() => { this.props.changePage(this.props.link) }}
                    className="icon-image" src={this.state.pattern.png()} />



                <p className="icon-text" >{this.props.name} </p>
                <p className="description-text">{this.props.description}</p>



            </div >
        )
    }
}