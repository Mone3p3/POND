
import { Link } from "react-router-dom";

const externalPosts = [
    {
        username: "Sapooo",
        arroba: "@QuackDigoRibbit",
        userImage: "images/sapoPfp.jpg",
        texto: "Achis ontoi",
        imagen: "images/sapoPost2.jpg",
        comentarios: 1,
        likes: 4,
        reposts: 1,
        views: 0,
        fecha: "1/Ene/2026"
    },
    {
        username: "Sapooo",
        arroba: "@QuackDigoRibbit",
        userImage: "images/sapoPfp.jpg",
        texto: "Otro dia aca vigilando y aja",
        imagen: "images/sapoPost1.jpg",
        comentarios: 5,
        likes: 10,
        reposts: 15,
        views: 20,
        fecha: "2/Ene/2026"
    }
];

function ExternalProfilePosts(){

    return(
        <div>
            {externalPosts.map((post, index) => (
                <div className="post-container" key={index}>
                    <div className="post-user-container">
                        <div className="user-image-small">
                            <img src={post.userImage} alt="user-icon"/>
                        </div>

                        <span className="username"> {post.username} </span>

                        <span className="arroba"> {post.arroba} </span>

         
                    </div>

                    <Link to={'/verPost'} className="post-area">
                        <div>
                            <p className="post-text"> {post.texto} </p>
                        </div>

                        <div className="post-image">
                            <img src={post.imagen} alt="post-image"/>
                        </div>
                    </Link>

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

export default ExternalProfilePosts