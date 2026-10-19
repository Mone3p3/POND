
import { Link } from "react-router-dom";

const discoverUsers = [
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

function DiscoverUsers(){

    return(
        <div>
            {discoverUsers.map((post,index) => (
                <Link to={'/perfilAjeno'} className='d-flex align-items-center w-100 text-decoration-none rounded-3 py-3 discover-hover' key={index}>
                    <div className="user-image-small">
                        <img src={post.userImage} alt="user-icon"/>
                    </div>
                    
                    <div className="discover-user-name-container d-flex flex-column">
                        <span className="username">{post.username}</span>
                        <span className="arroba">{post.arroba}</span>
                        <span className='desc-mini'>{post.desc}</span>
                    </div>
                </Link>
            ))}
        </div>

    )
}

export default DiscoverUsers