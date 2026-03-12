// const startListening = async () => {

// const stream = await navigator.mediaDevices.getUserMedia({ audio:true });

// const audioContext = new AudioContext();
// const analyser = audioContext.createAnalyser();
// const microphone = audioContext.createMediaStreamSource(stream);

// microphone.connect(analyser);

// const data = new Uint8Array(analyser.frequencyBinCount);

// setInterval(()=>{

// analyser.getByteFrequencyData(data);

// let volume = data.reduce((a,b)=>a+b)/data.length;

// if(volume > 180){

// alert("Distress sound detected!");
// fetch("http://127.0.0.1:8000/sos",{method:"POST"});

// }

// },1000);

// }
import { useEffect } from "react";

function AudioDetection(){

const startListening = () => {

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.continuous = true;

recognition.onresult = (event)=>{

const transcript = event.results[event.results.length-1][0].transcript.toLowerCase();

console.log("Heard:", transcript);

if(transcript.includes("help") || transcript.includes("save me")){

alert("🚨 Distress Detected");

fetch("http://localhost:8000/sos",{
method:"POST"
});

}

};

recognition.start();
};

return(
<button onClick={startListening}>
Enable AI Distress Detection
</button>
)

}

export default AudioDetection;