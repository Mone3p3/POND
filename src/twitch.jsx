

function TwitchStream() {
    return (
        <iframe
            src="https://player.twitch.tv/?channel=DashDucks&parent=localhost"
            className="twitch-ratio"
            allowFullScreen
            title="DashDucks"
        ></iframe>
    );
}

export default TwitchStream;