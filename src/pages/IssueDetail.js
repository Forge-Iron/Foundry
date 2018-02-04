import React, { Component } from 'react';

import '../App.css';
import IssueCard from '../components/IssueCard';
import Switch from 'react-switch';
import ResourceCard from '../components/ResourceCard';

export default class IssueDetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(checked) {
        this.setState({ checked });
    }

    render() {
        return (
            <div className="App">
                <p className="text" style={{ marginTop: 40, color: 'lightgray' }}> #746 </p>
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
                    <ResourceCard />
                    <ResourceCard />
                </div>
                <p className="text sub" style={{ color: 'lightgray' }}> Add </p>
            </div >
        )
    }
}