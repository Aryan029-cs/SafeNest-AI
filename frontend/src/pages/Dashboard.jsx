import AudioDetection from "../components/AudioDetection";
import ShakeDetector from "../components/ShakeDetector";
import SOSButton from "../components/SOSButton";
import "../App.css";
import VolunteerPanel from "../components/VolunteerPanel";
import FakeCallScreen from "../components/FakeCallScreen";

const startListening = async () => {

const stream = await navigator.mediaDevices.getUserMedia({ audio:true });

const audioContext = new AudioContext();
const analyser = audioContext.createAnalyser();
const microphone = audioContext.createMediaStreamSource(stream);

microphone.connect(analyser);

const data = new Uint8Array(analyser.frequencyBinCount);

setInterval(()=>{

analyser.getByteFrequencyData(data);

let volume = data.reduce((a,b)=>a+b)/data.length;

if(volume > 180){

alert("Distress sound detected!");

fetch("http://127.0.0.1:8000/sos",{
method:"POST"
});

}

},1000);

};

function Dashboard() {
  const getLocation = () => {

navigator.geolocation.getCurrentPosition((position)=>{

const lat = position.coords.latitude;
const lon = position.coords.longitude;

alert(`Location: ${lat}, ${lon}`);

});

}
let tapCount = 0;

const handleTap = ()=>{

tapCount++;

if(tapCount===3){

alert("Silent SOS Triggered");

}

}
  return (
    <div className="container" onClick={handleTap}>
      
      <ShakeDetector/>
      
      <header className="header">
        <h1><b>🛡️ SafeNest AI</b></h1>
        <p>Your Intelligent Guardian</p>
      </header>
      <h2 className="status">AI Protection Active</h2>

      <div className="sos-area">
        <SOSButton/>
        <br></br>
        <p className="shake">📳 Shake phone to trigger emergency</p>
      </div>
      <div className="button-row">
<button onClick={getLocation}>Get Location</button>
<button onClick={startListening}>Enable AI Distress Detection</button>
</div>
<div className="threat-meter">
<h3>AI Threat Detection</h3>
<div className="meter-bar">
<div className="meter-level"></div>
</div>
<p>Status: Safe</p>
</div>
<div className="ai-listening">
🎤 AI Listening Mode Active
</div>
      <div className="feature-row">
      <div className="feature-card">
<div className="feature-icon">
  <FakeCallScreen/>
  <br></br>
  📞</div>
<h3>Fake Call Mode</h3>
<p>Escape unsafe situations instantly</p>

</div>

<div className="feature-card">
<div className="feature-icon">🛡</div>
<h3>Volunteer Network</h3>
<p>Nearby helpers get notified</p>

</div>

<div className="feature-card">
<div className="feature-icon">📍</div>
<h3>GPS Tracking</h3>
<p>Share your live location</p>

</div>
</div>

<div className="radar">
<h3>Volunteer Radar</h3>
<div className="radar-circle"></div>
</div>
      <VolunteerPanel/>

      <div className="leaderboard">
<h3>🏆 Volunteer Leaderboard</h3>

<div className="leader">
<span>Aryan</span>
<span>30 pts</span>
</div>

<div className="leader">
<span>Rahul</span>
<span>20 pts</span>
</div>

<div className="leader">
<span>Aman</span>
<span>10 pts</span>
</div>

</div>

    </div>
  );
}

export default Dashboard;