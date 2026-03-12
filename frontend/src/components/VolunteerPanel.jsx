import { useState } from "react";

function VolunteerPanel(){

const [volunteers] = useState([

]);

return(

<div style={{marginTop:"30px"}}>



{volunteers.map((v,i)=>(

<div key={i} style={{
padding:"10px",
margin:"5px",
background:"#1e1e1e",
borderRadius:"8px"
}}>

{v.name} — {v.points} points

</div>

))}

</div>

);

}

export default VolunteerPanel;