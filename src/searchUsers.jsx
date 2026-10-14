
import { Link } from "react-router-dom";

const users = [
    {
        username: "Sapooo",
        arroba: "@QuackDigoRibbit",
        userImage: "images/sapoPfp.jpg",
        desc: "Wawa.",
    },
    {
        username: "Sapooo",
        arroba: "@QuackDigoRibbit",
        userImage: "images/sapoPfp.jpg",
        desc: "Wewe",
    }
];

function SearchUsers(){

    return(
        <div>
            {users.map((post,index) => (
                <div className='user-container' key={index}>
                    <div className="discover-user-container">
                        <Link to={'/perfilAjeno'} className='d-flex align-items-center w-100 text-decoration-none'>
                            <div className="user-image-small">
                                <img src={post.userImage} alt="user-icon"/>
                            </div>
                            
                            <div className="discover-user-name-container d-flex flex-column">
                                <span className="username">{post.username}</span>
                                <span className="arroba">{post.arroba}</span>
                                <span className='desc-mini'>{post.desc}</span>
                            </div>
                        </Link>

                        <div className="post-options">
                                <button className="follow-btn" id="followBtn">Seguir</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default SearchUsers