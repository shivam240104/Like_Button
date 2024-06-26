import { useState } from "react"

export default function likeButton(){
    let [isLiked, setIsliked]=useState(false);
    let toggleLike= () =>{
        console.log("We are going to toggle");
    };

    return(
        <div>
            <p onClick={toggleLike}>
            <i className="fa-regular fa-heart"></i>
            </p>


        </div>
    )
}