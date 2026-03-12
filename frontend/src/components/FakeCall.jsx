import { useState } from "react";

function FakeCall(){

const [showCall,setShowCall] = useState(false);

const triggerCall = ()=>{
setShowCall(true);
}

const endCall = ()=>{
setShowCall(false);
}

return(

<>
<button className="fake-call-btn" onClick={triggerCall}>
<b>📞 Trigger Fake Call</b>
</button>

{showCall && (

<div className="fake-call-screen">

<h1>Incoming Call</h1>

<div className="caller">
    <h2>Mom Calling...</h2>
</div>

<div className="call-buttons">

<button className="accept">
Accept
</button>

<button className="reject" onClick={endCall}>
Reject
</button>

</div>

</div>

)}

</>

)

}

export default FakeCall;