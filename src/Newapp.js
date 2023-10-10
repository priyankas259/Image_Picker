import { useRef, useState } from "react";

const Newapp=()=>{
    const inputRef=useRef();
    const [image,setImage]=useState("");
    
    const handleClick=()=>{
        inputRef.current.click();
    }
    const hamdleChange=(event)=>{
        const file=event.target.files[0];
        console.log(file)
        setImage('event.target.files[0]');
    }
    return(
        <div >
            {/* {image ?<img src={URL.createObjectURL(image)} alt="" /> : < img src="./Image/icons8-imagd-48.png"/>} */}
            <input type='file'ref={inputRef} onChange={hamdleChange} capture/>
            {/* <button>Take selfie</button> */}
        </div>
    )
}

export default Newapp;