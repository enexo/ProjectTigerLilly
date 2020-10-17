import React from 'react';

//Import all Profile Pictures
import chessNetworkPic from '../img/ChessNetwork.png';
import christofSieleckiPic from '../img/Christof-Sielecki.png';
import ericRosenPic from '../img/Eric-Rosen.png';
import johnBartholomewPic from '../img/John-Bartholomew.png';
import botezPic from '../img/Alexandra-Botez.png';
import agadmatorPic from '../img/Agadmator.png';

console.log("Hi Programmers! My Name is Nathan Orlowski and this is my ReactJS passion project.  If you are interested " +
    "in seeing my CV, please go to NathanOrlowski.com")

function Home() {
    return (
        <div>
            <div className="container">
                <h1 className="greetings">Meet the Best Live Chess Streamers</h1>
                <div className="row">
                    <div className="col">
                        <a href="/agadmator">
                            <img src={agadmatorPic} alt="logo" className="img-fluid"/>
                        </a>
                        <div className="d-flex justify-content-center">
                            <a href="/agadmator" className="streamerName">Agadmator</a>
                        </div>
                    </div>
                    <div className="col">
                        <a href="/alexandra-botez">
                            <img src={botezPic} alt="logo" className="img-fluid"/>
                        </a>
                        <div className="d-flex justify-content-center">
                            <a href="/alexandra-botez" className="streamerName">Alexandra Botez</a>
                        </div>
                    </div>
                    <div className="col">
                        <a href="/chessnetwork">
                            <img src={chessNetworkPic} alt="logo" className="img-fluid"/>
                        </a>
                        <div className="d-flex justify-content-center">
                            <a href="/chessnetwork" className="streamerName">ChessNetwork</a>
                        </div>
                    </div>
                    <div className="col">
                        <a href="/christof-sielecki">
                            <img src={christofSieleckiPic} alt="logo" className="img-fluid"/>
                        </a>
                        <div className="d-flex justify-content-center">
                            <a href="/christof-sielecki" className="streamerName">Christof Sielecki</a>
                        </div>
                    </div>
                    <div className="col">
                        <a href="/eric-rosen">
                            <img src={ericRosenPic} alt="logo" className="img-fluid"/>
                        </a>
                        <div className="d-flex justify-content-center">
                            <a href="/eric-rosen" className="streamerName">Eric Rosen</a>
                        </div>
                    </div>
                    <div className="col">
                        <a href="/john-bartholomew">
                            <img src={johnBartholomewPic} alt="logo" className="img-fluid"/>
                        </a>
                        <div className="d-flex justify-content-center">
                            <a href="/john-bartholomew" className="streamerName">John Bartholomew</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;