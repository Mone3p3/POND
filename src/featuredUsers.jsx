
import { Link } from "react-router-dom";

const featuredUsers = [
    {
        username: "Sapooo",
        arroba: "@QuackDigoRibbit",
        userImage: "images/sapoPfp.jpg",
    },
    {
        username: "Sapooo",
        arroba: "@QuackDigoRibbit",
        userImage: "images/sapoPfp.jpg",
    }
];

function FeaturedUsers(){

    return(
        <div>
            {featuredUsers.map((post,index) => (
                <Link to={'/perfilAjeno'} className='d-flex align-items-center w-100 text-decoration-none mt-4' key={index}>
                    <div className="user-image-small">
                        <img src={post.userImage} alt="user-icon"/>
                    </div>
                    
                    <div className="discover-user-name-container d-flex flex-column">
                        <span className="username">{post.username}</span>
                        <span className="arroba">{post.arroba}</span>
                        <span className='desc-mini'>{post.desc}</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--text)" className="ms-auto">
                        <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/>
                    </svg>
                </Link>
            ))}
        </div>

    )
}

export default FeaturedUsers