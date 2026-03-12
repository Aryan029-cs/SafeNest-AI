import { useState } from "react";

function FakeCallScreen(){

const [call,setCall] = useState(false);

return(

<div>

{!call && (
<button className="fake-call-btn" onClick={()=>setCall(true)}>
📞 Trigger Fake Call
</button>
)}

{call && (
<div className="call-screen">

<h2>Incoming Call</h2>

<h1>Mom Calling...</h1>

<div className="call-buttons">

<button className="accept">Accept</button>

<button className="reject" onClick={()=>setCall(false)}>
Reject
</button>

</div>

</div>
)}

</div>

);

}

export default FakeCallScreen;