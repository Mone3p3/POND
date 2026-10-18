
import { Link } from "react-router-dom";

const posts = [
    {
        username: "Patero",
        arroba: "@Patararero",
        userImage: "images/estanque2.jpg",
        texto: "Texto de mensaje de este post. Este es un ejemplo de publicación.",
        imagen: "images/SoukEye_Gorillaz.jpg",
        comentarios: 0,
        likes: 0,
        reposts: 0,
        views: 0,
        fecha: "1/Ene/2026"
    },
    {
        username: "Patero",
        arroba: "@Patararero",
        userImage: "images/estanque2.jpg",
        texto: "Este de aqui... tambien es otro ejemplo.",
        imagen: "images/DaftPunkIninityRepeating.jpg",
        comentarios: 5,
        likes: 10,
        reposts: 15,
        views: 20,
        fecha: "2/Ene/2026"
    }
];

function ProfilePosts(){

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
                            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="var(--text-sub)">
                                <path d="M880-80 720-240H160q-33 0-56.5-23.5T80-320v-480q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v720ZM160-320h594l46 45v-525H160v480Zm0 0v-480 480Z"/>
                            </svg>
                            <span className="post-bottom-likes-number"> {post.comentarios} </span>
                        </div>

                        <div className="post-bottom-container-likes">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--text-sub)">
                                <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/>
                            </svg>
                            <span className="post-bottom-likes-number"> {post.likes} </span>
                        </div>

                        <div className="post-bottom-container-likes">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--text-sub)">
                                <path d="M280-80 120-240l160-160 56 58-62 62h406v-160h80v240H274l62 62-56 58Zm-80-440v-240h486l-62-62 56-58 160 160-160 160-56-58 62-62H280v160h-80Z"/>
                            </svg>
                            <span className="post-bottom-likes-number">
                                {post.reposts}
                            </span>
                        </div>

                        <div className="post-bottom-container-likes">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--text-sub)">
                                <path d="M640-160v-280h160v280H640Zm-240 0v-640h160v640H400Zm-240 0v-440h160v440H160Z"/>
                            </svg>
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

export default ProfilePosts