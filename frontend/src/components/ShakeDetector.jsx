import { useEffect } from "react";

function ShakeDetector(){

useEffect(()=>{

let lastX = null;

const handleMotion = (event)=>{

let acc = event.accelerationIncludingGravity.x;

if(lastX !== null){

let diff = Math.abs(acc - lastX);

if(diff > 15){

alert("Phone Shake Detected!");

fetch("http://127.0.0.1:8000/sos",{
method:"POST"
});

}

}

lastX = acc;

};

window.addEventListener("devicemotion",handleMotion);

return ()=> window.removeEventListener("devicemotion",handleMotion);

},[]);

return null;

}

export default ShakeDetector;