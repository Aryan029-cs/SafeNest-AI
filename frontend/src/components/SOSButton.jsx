function SOSButton(){

const triggerSOS = async () => {

const audio = new Audio("https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg");
audio.play();

document.body.style.background = "red";

setTimeout(()=>{
document.body.style.background = "";
},1000);

const res = await fetch("http://127.0.0.1:8000/sos",{
method:"POST"
});

const data = await res.json();
console.log("Responders:",data.responders);

alert("🚨 SOS Alert Sent to Volunteers");

console.log(data);
const responders = [
"🚓 Police Station Notified",
"👤 Rahul Responding",
"👤 Aman Responding"
]

responders.forEach(r=>{
console.log(r)
});
};
const startCountdown = () => {

let count = 3;

const countdown = setInterval(()=>{

console.log("Sending alert in",count);

count--;

if(count === 0){
clearInterval(countdown);
triggerSOS();
}

},1000);
};


return(
<button className="sos-btn" onClick={triggerSOS}>
SOS
</button>
);

}

export default SOSButton;