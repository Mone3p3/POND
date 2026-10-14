

import { Link } from "react-router-dom";

const comments = [
    {
        username: "Sapooo",
        arroba: "@QuackDigoRibbit",
        userImage: "images/sapoPfp.jpg",
        comment: "Maravilloso"
    },
    {
        username: "Sapooo",
        arroba: "@QuackDigoRibbit",
        userImage: "images/sapoPfp.jpg",
        comment:"Esplendido"
    }
];

function Comments(){

    return(
        <div>
            {comments.map((post,index) => (
                <div className='d-flex flex-column w-100 mt-2 pt-2' key={index}>
                    <hr className="separador-horizontal"></hr>
                    <Link to={'/verPost'} className=" pt-2 text-decoration-none">
                        <Link to={'/perfilAjeno'} className="d-flex flex-row align-items-center text-decoration-none">
                            <div className="user-image-small">
                                <img src={post.userImage} alt="user-icon"/>
                            </div>
                            
                            <div className="discover-user-name-container">
                                <span className="username">{post.username}</span>
                                <span className="arroba">{post.arroba}</span>
                                <span className="post-bottom-likes-number ms-3"> 12/08/2026 </span>
                            </div>
                        </Link>
                        <span className="post-comment ps-5 ms-3 ">awas</span>
                    </Link>

                    <div className="post-bottom-container ver w-75">
                        <div className="post-bottom-container-likes">
                            <img src="comm_b.svg" alt="Comment"/>
                            <span className="post-bottom-likes-number"> 12 </span>
                        </div>

                        <div className="post-bottom-container-likes">
                            <img src="heart_b.svg" alt="Like"/>
                            <span className="post-bottom-likes-number"> 8 </span>
                        </div>

                        <div className="post-bottom-container-likes">
                            <img src="rep_b.svg" alt="Repost"/>
                            <span className="post-bottom-likes-number"> 3 </span>
                        </div>

                        <div className="post-bottom-container-likes">
                            <img src="stat_b.svg" alt="Views"/>
                            <span className="post-bottom-likes-number"> 89 </span>
                        </div>

                        
                    </div>
                </div>
            ))}
        </div>

    )
}

export default Comments