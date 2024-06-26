import { useState } from "react"

export default function likeButton(){
    let [isLiked, setIsliked]=useState(false);
    let toggleLike= () =>{
       setIsliked(!isLiked);
    };
    let LikeStyle={color:"red"}

    return(
        <div>
            <p onClick={toggleLike}>{

                isLiked ? <i className="fa-solid fa-heart" style={LikeStyle} ></i>:    <i className="fa-regular fa-heart"></i>
                }
        
            </p>


        </div>
    )
}