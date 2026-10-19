
import { Link } from "react-router-dom";
import { useState } from "react";
import EmojiPicker from "emoji-picker-react";

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
        emojis: 11,
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
        emojis:55,
        fecha: "2/Ene/2026"
    }
];

function ProfilePosts(){

    const [likedPosts, setLikedPosts] = useState({});
    const [emojiedPosts, setEmojiedPosts] = useState({});
    const [selectedEmojis, setSelectedEmojis] = useState({});
    const [emojiPickerPost, setEmojiPickerPost] = useState(null);

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

                        <button id="like" type="button" className={`post-bottom-container-likes rounded-4 p-1 ${likedPosts[index] ? 'liked' : ''}`} onClick={() => { setLikedPosts(prev => ({ ...prev,[index] : !prev[index]})); }}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={likedPosts[index] ? "#e0245e" : "var(--text-sub)"}>
                                <path d={likedPosts[index] ? "M480-120 434-162q-101-92-167-158T160-448q-39-52-59.5-96T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-20.5 90T800-448q-41 62-107 128T526-162l-46 42Z"
                                : "m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"} />
                            </svg>
                            <span className="post-bottom-likes-number me-1"> {post.likes + (likedPosts[index] ? 1 : 0)} </span>
                        </button>

                        <div className="post-bottom-container-likes">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--text-sub)">
                                <path d="M640-160v-280h160v280H640Zm-240 0v-640h160v640H400Zm-240 0v-440h160v440H160Z"/>
                            </svg>
                            <span className="post-bottom-likes-number"> {post.views} </span>
                        </div>

                        <div className="reaccion-container">
                            <button type="button" className="post-bottom-container-likes rounded-4 p-1" onClick={() => setEmojiPickerPost( emojiPickerPost === index ? null : index) }>
                                <span className={selectedEmojis[index] ? 'emoji-reaccion' : 'emoji-vacio'}>
                                    {selectedEmojis[index] || 
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--text-sub)">
                                        <path d="M620-520q25 0 42.5-17.5T680-580q0-25-17.5-42.5T620-640q-25 0-42.5 17.5T560-580q0 25 17.5 42.5T620-520Zm-280 0q25 0 42.5-17.5T400-580q0-25-17.5-42.5T340-640q-25 0-42.5 17.5T280-580q0 25 17.5 42.5T340-520Zm263.5 221.5Q659-337 684-400h-66q-22 37-58.5 58.5T480-320q-43 0-79.5-21.5T342-400h-66q25 63 80.5 101.5T480-260q68 0 123.5-38.5ZM324-111.5Q251-143 197-197t-85.5-127Q80-397 80-480t31.5-156Q143-709 197-763t127-85.5Q397-880 480-880t156 31.5Q709-817 763-763t85.5 127Q880-563 880-480t-31.5 156Q817-251 763-197t-127 85.5Q563-80 480-80t-156-31.5ZM480-480Zm227 227q93-93 93-227t-93-227q-93-93-227-93t-227 93q-93 93-93 227t93 227q93 93 227 93t227-93Z"/>
                                    </svg>}
                                </span>
                                <span className="post-bottom-likes-number me-1"> {post.emojis + (emojiedPosts[index] ? 1 : 0)} </span>
                            </button>

                            {emojiPickerPost === index && (
                                <div className="emoji-picker-container">
                                    <EmojiPicker className="emoji-picker" onEmojiClick={(emojiData) => {setSelectedEmojis(prev => ({...prev, [index]: emojiData.emoji  })); setEmojiPickerPost(null); setEmojiedPosts(prev => ({ ...prev,[index] : !prev[index]})); }} previewConfig={{ showPreview: false }}/>
                                </div>
                            )}
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