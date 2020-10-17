import React, {
    useEffect, useState
} from 'react';
import api from '../api';
import StreamerList from "./StreamerList";

function ChessNetwork () {
    const [profileImage, setProfileImage] = useState('unknown');
    // eslint-disable-next-line
    const [displayName, setDisplayName] = useState('unknown');
    const [userDesc, setUserDesc] = useState('unknown');
    const [isLive, setIsLive] = useState('unknown');


    useEffect(() => {
        const fetchData = async () => {
            const user = await api.get('https://api.twitch.tv/helix/users?login=chessnetwork');
            let dataArray = user.data.data[0];

            let displayName = dataArray.display_name;
            setDisplayName(displayName);
            let profileImage = dataArray.offline_image_url;
            setProfileImage(profileImage);
            let userDesc = dataArray.description;
            setUserDesc(userDesc);

            const channel = await api.get('https://api.twitch.tv/helix/search/channels?query=chessnetwork');
            let channelResult = channel.data.data[0].is_live;
            const isLive = "ChessNetwork is Live on Twitch!";
            if (channelResult) {
                setIsLive(isLive);
                console.log(isLive);
            }
        };
        fetchData();
    }, []);
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <StreamerList/>
                    </div>
                    <div className="col">
                        <img src={profileImage} alt="" className="img-fluid"/><br/>
                        <h2 className="lifetimeTitle">National Master</h2>
                        <h1>Jerry ChessNetwork</h1>
                        <strong>American</strong>
                        <div className="row">
                            <div className="col">
                                <strong>USCF: 2350</strong>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col">
                                Follow Him On:
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <a href="https://www.twitch.tv/chessnetwork" className="socialLinks">Twitch</a>
                            </div>
                            <div className="col">
                                <a href="https://twitter.com/ChessNetwork" className="socialLinks">Twitter</a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <a href="https://www.youtube.com/user/ChessNetwork" className="socialLinks">Youtube</a>
                            </div>
                            <div className="col">
                                <a href="https://www.facebook.com/ChessNetwork/" className="socialLinks">Facebook</a>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col">
                                <strong className="beBold">Twitch Bio</strong>
                                <p className="userDesc">{userDesc}</p>
                                <p  className="userDesc">Twitch Streaming Status: {isLive}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ChessNetwork;