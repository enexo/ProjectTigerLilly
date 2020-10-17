import React from 'react';
import '../App.css';

function About() {

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="aboutTheProject">ChessEnvoy is a passion project built by Nathan Orlowski.  It uses ReactJS and Bootstrap to
                        connect to the Twitch.TV API.  The GitHub Repo for this project can be viewed
                            <a href="https://github.com/enexo/ProjectTigerLilly"> here</a>.  Any
                        questions or concerns, please contact nathan@nathanorlowski.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;