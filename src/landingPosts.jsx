


const posts = [
    {
        username: "KatanaPhighting",
        arroba: "@DefinitelyNotSlingshot",
        userImage: "images/Katana.jpeg",
        texto: "Texto de mensaje de este post. Este es un ejemplo de publicación.",
        imagen: "images/SoukEye_Gorillaz.jpg",
        comentarios: 0,
        likes: 0,
        reposts: 0,
        views: 0,
        fecha: "1/Ene/2026"
    },
    {
        username: "Noelle",
        arroba: "@ILoveLakes",
        userImage: "images/Tenna.png",
        texto: "Este de aqui... tambien es otro ejemplo.",
        imagen: "images/DaftPunkIninityRepeating.jpg",
        comentarios: 5,
        likes: 10,
        reposts: 15,
        views: 20,
        fecha: "2/Ene/2026"
    }
];

function LandingPosts(){

    return(
        <div>
            {posts.map((post, index) => (
                <div className="post-container" key={index}>
                    <div className="post-user-container">
                        <div className="user-image-small">
                            <img src={post.userImage} alt="user-icon"/>
                        </div>

                        <span className="username"> {post.username} </span>

                        <span className="arroba"> {post.arroba} </span>

                        <div className="post-options">
                            <img src="dots_v.svg" alt="post-options"/>
                        </div>
                    </div>

                    <div>
                        <p className="post-text"> {post.texto} </p>
                    </div>

                    <div className="post-image">
                        <img src={post.imagen} alt="post-image"/>
                    </div>

                    <div className="post-bottom-container">
                        <div className="post-bottom-container-likes">
                            <img src="comm_b.svg" alt="Comment"/>
                            <span className="post-bottom-likes-number"> {post.comentarios} </span>
                        </div>

                        <div className="post-bottom-container-likes">
                            <img src="heart_b.svg" alt="Like"/>
                            <span className="post-bottom-likes-number"> {post.likes} </span>
                        </div>

                        <div className="post-bottom-container-likes">
                            <img src="rep_b.svg" alt="Repost"/>
                            <span className="post-bottom-likes-number">
                                {post.reposts}
                            </span>
                        </div>

                        <div className="post-bottom-container-likes">
                            <img src="stat_b.svg" alt="Views"/>
                            <span className="post-bottom-likes-number"> {post.views} </span>
                        </div>

                        <div className="post-bottom-container-likes">
                            <span className="post-bottom-likes-number"> {post.fecha} </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default LandingPosts