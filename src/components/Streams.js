import React, {
    useEffect, useState
} from 'react';
import api from '../api';
import '../App.css';


function LiveStreams() {

    const [isLive, setIsLive] = useState('unknown');
    const [cnLive, setCNLive] = useState('unknown');
    const [csLive, setCSLive] = useState('unknown');
    const [jbLive, setJBLive] = useState('unknown');

    useEffect(() => {
        const fetchData = async () => {

            // Eric Rosen
            const channel = await api.get('https://api.twitch.tv/helix/search/channels?query=imrosen');
            let channelResult = channel.data.data[0].is_live;
            const isLive = "Live on Twitch!";
            // If Live, then post live; needs improvement because it prints "Unknown" if statement is False
            if (channelResult) {
                setIsLive(isLive);
            }

            // ChessNetwork
            const cn = await api.get('https://api.twitch.tv/helix/search/channels?query=chessnetwork');
            let cnResult = cn.data.data[0].is_live;
            const cnLive = "Live on Twitch!";
            // If Live, then post live; needs improvement because it prints "Unknown" if statement is False
            if (cnResult) {
                setCNLive(cnLive);
            }

            // Christof-Sielecki
            const cs = await api.get('https://api.twitch.tv/helix/search/channels?query=chessxplained');
            let csResult = cs.data.data[0].is_live;
            const csLive = "Live on Twitch!";
            // If Live, then post live; needs improvement because it prints "Unknown" if statement is False
            if (csResult) {
                setCSLive(csLive);
            }

            // John Bartholomew
            const jb = await api.get('https://api.twitch.tv/helix/search/channels?query=JohnBartholomew');
            let jbResult = jb.data.data[0].is_live;
            const jbLive = "Live on Twitch!";
            // If Live, then post live; needs improvement because it prints "Unknown" if statement is False
            if (jbResult) {
                setJBLive(jbLive);
            }
        };
        fetchData();
    }, []);
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Twitch Channel</th>
                                <th scope="col">Streaming Now</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">NM</th>
                                <td>Jerry</td>
                                <td>ChessNetwork</td>
                                <td>ChessNetwork</td>
                                <td>{cnLive}</td>
                            </tr>
                            <tr>
                                <th scope="row">IM</th>
                                <td>Eric</td>
                                <td>Rosen</td>
                                <td>IMRosen</td>
                                <td>{isLive}</td>
                            </tr>
                            <tr>
                                <th scope="row">IM</th>
                                <td>Christof</td>
                                <td>Sielecki</td>
                                <td>ChessXplained</td>
                                <td>{csLive}</td>
                            </tr>
                            <tr>
                                <th scope="row">IM</th>
                                <td>John</td>
                                <td>Bartholomew</td>
                                <td>JohnBartholomew</td>
                                <td>{jbLive}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LiveStreams;