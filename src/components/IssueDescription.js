import React, { Component } from 'react';
import './components.css';
import reactHashAvatar from 'react-hash-avatar'

import { BarChart } from 'react-chartkick';



export default class IssueDescription extends Component {


    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    render() {
        var c1 = this.getRandomColor();
        var c2 = this.getRandomColor();
        var data = {
            labels: ["Resources", "Difficulty", "People"],
            datasets: [
                {
                    label: "Resources",
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: [65, 45, 55],
                }
            ]
        }
        return (
            < div className="card" >
                <p className="card-title-text"> Refactor </p>
                <p className="card-subtitle-text"> Working on making the codebase more readable and easy to access </p>
                <BarChart data={[["Resources", 5], ["Difficulty", 27], ["People", 27]]} colors={[c1, c2]} />
                <button className="card-btn">
                    <p className="btn-txt"> Forge </p>
                </button>
            </div >
        )
    }
}