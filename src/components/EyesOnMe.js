// Code EyesOnMe Component Here
import react from "react";

function EyesOnMe(){
    function focus(){
        console.log('Good!');
    }
    function blur(){
        console.log('Hey! Eyes on me!');
    }
    return(
        <div>
            <button onFocus={focus} onBlur={blur}></button>
            
        </div>
    )
}
export default EyesOnMe;