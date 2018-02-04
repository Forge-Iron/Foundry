import React, { Component } from 'react';

import '../App.css';
import IssueCard from '../components/IssueCard';
import Switch from 'react-switch';
import ResourceCard from '../components/ResourceCard';
import AddResourceCard from '../components/AddResourceCard';

export default class IssueDetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            elements: [
                { title: "Resource allocation fix", link: "http://google.com" },
                { title: "Resource allocation fix", link: "http://google.com" },
                { title: "Resource allocation fix", link: "http://google.com" },
            ],
            checked: false
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(checked) {
        this.setState({ checked });
    }
    add_card(title, url) {
        var els = this.state.elements;
        els.push({ title: title, link: url });
        this.setState({
            elements: els,
        })
    }

    render() {

        var elements = [];
        for (var i = 0; i < this.state.elements.length; i++) {
            elements.push(<ResourceCard title={this.state.elements[i].title} link={this.state.elements[i].link} />);
        }
        console.log(this.state.elements);
        return (
            <div className="App">
                <p className="text" style={{ marginTop: 40, color: '#e56f56' }}> #746 </p>
                <p className="text" style={{ marginTop: 5 }} > Some random Issue Title </p>
                <p className="text sub"> Mentorship available for this issue? </p>
                <div style={{ alignSelf: 'center' }}>
                    <Switch
                        onChange={this.handleChange}
                        checked={this.state.checked}
                        id="normal-switch"
                    />
                </div>

                <p className="text" style={{ fontSize: 45, marginTop: 80 }}> Resources to get Started </p>
                <div className="grid-2" style={{ width: '100%' }}>
                    {elements}
                    <AddResourceCard add_card={this.add_card.bind(this)} />
                </div>


                <button className="login login-btn">
                    <p className="text sub"> Submit</p>
                </button>
            </div >
        )
    }
}