import React, { Component } from 'react';
import './components.css';
import {
    Link
} from 'react-router-dom';


export default class AddIssueCard extends Component {


    render() {
        var tags = [];

        tags.push(<p className="text sub" style={{ margin: 10, color: "#efac23" }}> Bug </p>);
        tags.push(<p className="text sub" style={{ margin: 10, color: "#a1fc08" }}> Feature </p>);


        return (
            <Link to="/issue/edit/asdfasd" ><div className="card h">
                <p className="text" style={{ textAlign: 'left', alignSelf: 'left', marginTop: 5, color: 'lightgray' }}> #746 </p>
                <p className="text" style={{ marginTop: 0, marginBottom: 0 }}> Title </p>
                <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }}>
                    {tags}
                </div>
                <p className="text sub"> Some issue pertaining to the repository </p>
            </div>
            </Link>
        )
    }
}