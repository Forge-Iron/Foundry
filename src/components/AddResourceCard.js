import React, { Component } from 'react';
import './components.css';


export default class AddResourceCard extends Component {
    constructor(props) {
        super(props)
        this.state =
            {
                title: "",
                url: "",
            }
    }

    render() {
        return (
            <div className="card">
                <input placeholder="Title"
                    onChange={(val) => {
                        this.setState({
                            title: val.target.value,
                        })

                    }} />
                <input placeholder="Enter url"
                    onChange={(val) => {
                        this.setState({
                            url: val.target.value,
                        })
                    }}
                />
                <p className="text sub" style={{ margin: 0, textAlign: 'right' }}
                    onClick={() => {
                        this.props.add_card(this.state.title, this.state.url)
                    }}
                > Add </p>
            </div>
        )
    }
}