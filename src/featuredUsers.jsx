
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
                    <img src="destacado_s.svg" alt="destacado-icon" className="ms-auto"/>
                </Link>
            ))}
        </div>

    )
}

export default FeaturedUsers