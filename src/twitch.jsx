

function TwitchStream() {
    return (
        <iframe
            src="https://player.twitch.tv/?channel=DashDucks&parent=localhost"
            width="100%"
            height="400"
            allowFullScreen
            title="DashDucks"
        ></iframe>
    );
}

export default TwitchStream;