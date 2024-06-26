export default function likeButton(){
    let clicked = () =>{
              console.log("cliked");  
    }

    return(
        <div>
            <p onClick={clicked}>
            <i className="fa-regular fa-heart"></i>
            </p>


        </div>
    )
}