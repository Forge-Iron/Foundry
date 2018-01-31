import React, { Component } from 'react';
import logo from '../images/boostfire.png';
import '../App.css';
import IssueCard from '../components/IssueCard';
import IssueDescription from '../components/IssueDescription';
import DiffElement from '../components/DiffCarouselEl';
import Slider from 'react-slick';


export default class RepoSubmit extends Component {

    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,

            slidesToScroll: 1
        };
        var texts = [
            { diff: "Easy", col: "#7fc6a4" },
            { diff: "Medium", col: "#edae49" },
            { diff: "Hard", col: "#f6511d" },
            { diff: "A real challenge", col: "#ff0000" }];
        var elements = []
        for (var i = 0; i < 4; i++) {
            elements.push(<div><DiffElement diff={texts[i].diff} color={texts[i].col} /></div>);
        }
        return (
            <div className="App">
                <div className="horiz" style={{ 'justify-content': 'space-between' }}>
                    <p className="title"> Foundry </p>

                    <a className="add-link" href="/main"><p className="btn-text"> Close </p></a>

                </div>
                <p className="spacer"> </p>
                <p className="text" style={{ fontSize: 40, marginBottom: 5 }}> Gust </p>
                <p className="text sub" style={{ marginTop: 10 }}> A small graphing library for rust, built with d3.js </p>


                <p className="text sub" > Difficulty </p>
                <div style={{ width: '50vw', alignItems: 'center', alignSelf: 'center' }}>
                    <Slider style={{ width: '50vw', marginBottom: 100 }}{...settings}>
                        {elements}
                    </Slider>
                </div>

            </div>
        )
    }
}