volunteers = [
{"name":"Rahul","distance":2},
{"name":"Aman","distance":1},
{"name":"Neha","distance":3}
]

def match_volunteers():

    sorted_vol = sorted(volunteers,key=lambda x:x["distance"])

    return sorted_vol[:2]
def send_alert(location):

    matched = match_volunteers()

    responders = [
    "Police Station",
    "Trusted Contact"
    ]

    for v in matched:
        responders.append(f"Volunteer {v['name']} ({v['distance']} km away)")

    message = f"🚨 EMERGENCY ALERT\nLocation: {location}"

    alerts_sent = []

    for r in responders:
        alerts_sent.append(f"Alert sent to {r}")

    return {
        "message": message,
        "alerts": alerts_sent
    }