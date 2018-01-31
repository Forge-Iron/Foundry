import React, { Component } from 'react';
import logo from '../images/boostfire.png';
import '../App.css';
import IssueCard from '../components/IssueCard';
import IssueDescription from '../components/IssueDescription';
import DiffElement from '../components/DiffCarouselEl';
import Slider from 'react-slick';
import AddIssueCard from '../components/AddIssueCard';


export default class RepoSubmit extends Component {

    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,

            slidesToScroll: 1
        };
        /* Difficulty Related
        var texts = [
            { diff: "Easy", col: "#7fc6a4" },
            { diff: "Medium", col: "#edae49" },
            { diff: "Hard", col: "#f6511d" },
            { diff: "A real challenge", col: "#ff0000" }];
        var elements = []
        for (var i = 0; i < 4; i++) {
            elements.push(<div><DiffElement diff={texts[i].diff} color={texts[i].col} /></div>);
        }
        */

        var elements = [];
        for (var i = 0; i < 5; i++) {
            elements.push(<AddIssueCard />);
        }
        return (
            <div className="App">
                <div className="horiz" style={{ 'justify-content': 'space-between' }}>
                    <p className="title"> Foundry </p>

                    <a className="add-link" href="/main"><p className="btn-text"> Close </p></a>

                </div>
                <p className="spacer"> </p>
                <p className="text" style={{ fontSize: 40, marginBottom: 5 }}> Gust </p>

                <p className="text sub"> Foundry will select all issues from your repository tagged "help wanted", and add them here. </p>
                <p className="text sub"> You can then add resources and show that mentorship is available for various issues </p>

                <p className="text" > Issues </p>
                {/* HERE IS THE DIFFICULTY CAROUSEL
                <div style={{ width: '50vw', alignItems: 'center', alignSelf: 'center' }}>
                    <Slider style={{ width: '50vw', marginBottom: 100 }}{...settings}>
                        {elements}
                    </Slider>
                </div>
                */}
                <div className="grid-2">
                    {elements}
                </div>

            </div>
        )
    }
}