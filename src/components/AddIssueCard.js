import React, { Component } from 'react';
import './components.css';


export default class AddIssueCard extends Component {


    render() {
        var tags = [];
        for (var i = 0; i < 3; i++) {
            tags.push(<p className="text sub" style={{ margin: 10, color: "#efac23" }}> Bug </p>);
        }
        return (
            <div className="card h">
                <p className="text" style={{ textAlign: 'left', alignSelf: 'left', marginTop: 5, color: 'lightgray' }}> #746 </p>
                <p className="text" style={{ marginTop: 0, marginBottom: 0 }}> Title </p>
                <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }}>
                    {tags}
                </div>
                <p className="text sub"> Some issue pertaining to the repository </p>
            </div>
        )
    }
}