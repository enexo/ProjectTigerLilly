import React, {Fragment} from 'react';
import '../App.css';

function StreamerList() {

    return (
        <Fragment>
            <h2>Streamer Directory</h2>
            <ul className="streamerDir">
                <li><a href="/john-bartholomew" className="streamerName">John Bartholomew</a></li>
                <li><a href="/chessnetwork" className="streamerName">ChessNetwork</a></li>
                <li><a href="/christof-sielecki" className="streamerName">Christof-Sielecki</a></li>
                <li><a href="/eric-rosen" className="streamerName">Eric Rosen</a></li>
                <li><a href="/alexandra-botez" className="streamerName">Alexandra Botez</a></li>
                <li><a href="/agadmator" className="streamerName">Agadmator</a></li>

            </ul>
        </Fragment>
    )
}

export default StreamerList;