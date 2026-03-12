from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from location_service import get_location
from alert_system import send_alert
from alert_system import match_volunteers

app = FastAPI()

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/sos")
def trigger_sos():

    location = get_location()

    alerts = send_alert(location)
    responders = match_volunteers()
    return {
        "status": "SOS Triggered",
        "location": location,
        "alerts": alerts,
        "responders": responders
    }