import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import { useEffect, useState } from "react";

function SafetyMap(){

const [position,setPosition] = useState([30.3165,78.0322]);

useEffect(()=>{

navigator.geolocation.watchPosition((pos)=>{

setPosition([
pos.coords.latitude,
pos.coords.longitude
])

});

},[]);

return(

<MapContainer center={position} zoom={15} style={{height:"300px"}}>

<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

<Marker position={position}/>

</MapContainer>

)

}

export default SafetyMap;