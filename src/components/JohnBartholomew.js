import React, {
    useEffect, useState
} from 'react';
import api from '../api';
import '../App.css';
import StreamerList from "./StreamerList";


function JohnBartholomew() {
    const [profileImage, setProfileImage] = useState('unknown');
    // eslint-disable-next-line
    const [displayName, setDisplayName] = useState('unknown');
    const [userDesc, setUserDesc] = useState('unknown');
    const [isLive, setIsLive] = useState('unknown');

    useEffect(() => {
        const fetchData = async () => {

            // Fetch Biographical Information
            const user = await api.get('https://api.twitch.tv/helix/users?login=JohnBartholomew');
            let dataArray = user.data.data[0];

            let displayName = dataArray.display_name;
            setDisplayName(displayName);
            let profileImage = dataArray.offline_image_url;
            setProfileImage(profileImage);
            let userDesc = dataArray.description;
            setUserDesc(userDesc);

            // Fetch whether or not user is Live on Twitch
            const channel = await api.get('https://api.twitch.tv/helix/search/channels?query=JohnBartholomew');
            let channelResult = channel.data.data[0].is_live;
            const isLive = "John Bartholomew is Live on Twitch!";
            // If Live, then post live; needs improvement because it prints "Unknown" if statement is False
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
                        <h2 className="lifetimeTitle">International Master</h2>
                        <h1>John Bartholomew</h1>
                        <strong>American</strong>
                        <div className="row">
                            <div className="col">
                                <strong>FIDE: 2446</strong>
                            </div>
                            <div className="col">
                                <strong>USCF: 2534</strong>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col">
                                <strong className="beBold">Follow Him On:</strong>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col socialLinks">
                                <a href="https://www.twitch.tv/fins0905" className="socialLinks">Twitch</a>
                            </div>
                            <div className="col socialLinks">
                                <a href="https://twitter.com/fins0905" className="socialLinks">Twitter</a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <a href="https://www.youtube.com/channel/UC6hOVYvNn79Sl1Fc1vx2mYA" className="socialLinks">Youtube</a>
                            </div>
                            <div className="col">
                                <a href="https://en.wikipedia.org/wiki/John_Bartholomew_(chess_player)" className="socialLinks">Wikipedia</a>
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

export default JohnBartholomew;