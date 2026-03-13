# 🛡️ SafeNest AI – Intelligent Personal Safety System

SafeNest AI is an AI-powered personal safety platform designed to provide **instant emergency assistance, real-time alerts, and community-driven protection**.

The system uses **AI distress detection, live GPS tracking, and volunteer matching** to ensure quick response during dangerous situations.

Built for **hackathon innovation**, SafeNest AI demonstrates how technology and community support can improve personal safety.

---

# 🚀 Problem Statement

Many people face unsafe situations where **quick help is unavailable**.
Traditional emergency systems are slow, and nearby help often goes unnoticed.

SafeNest AI solves this by providing:

• Instant SOS alerts
• AI-based distress detection
• Real-time location sharing
• Nearby volunteer response network

---

# 💡 Our Solution

SafeNest AI creates an **AI-assisted safety ecosystem** that connects users, volunteers, and emergency responders.

When danger is detected or SOS is triggered:

1. The system detects distress signals.
2. User location is captured instantly.
3. Alerts are sent to nearby volunteers.
4. Emergency response begins in real time.

---

# ✨ Key Features

### 🚨 Smart SOS System

One-tap SOS button sends an emergency alert with user location.

### 🎤 AI Distress Detection

AI listens for distress signals (screams / panic sounds) and can automatically trigger alerts.

### 📍 Live GPS Tracking

Real-time location sharing allows responders to reach the user quickly.

### 👥 Volunteer Network

Nearby volunteers are matched and notified instantly.

### 📞 Fake Call Mode

Users can trigger a fake call to escape uncomfortable or unsafe situations.

### 📊 Threat Detection Meter

AI UI indicator that visualizes potential risk level.

---

# 🧠 How It Works

1️⃣ User presses the **SOS button** or distress is detected.

2️⃣ Frontend sends request to backend API.

3️⃣ Backend processes the alert and retrieves location.

4️⃣ Nearby volunteers are matched.

5️⃣ Emergency alerts are dispatched.

---

# 🏗️ Tech Stack

### Frontend

React.js
HTML5 / CSS3
JavaScript

### Backend

FastAPI (Python)

### AI / Detection

Audio distress detection logic

### Other Technologies

REST API
Location services
Volunteer matching algorithm

---

# 📂 Project Structure

```
safenest-ai
│
├── frontend
│   ├──public ├── src
│   │         ├── components
│   │         │    ├── SOSButton.jsx
│   │         │    ├── SafetyMap.jsx
│   │         │    ├── FakeCall.jsx
│   │         │    ├── AudioDetection.jsx
│   │         │    ├── FakeCallScreen.jsx      
│   │         │    ├── ShakeDetector.jsx
│   │         │    └── VolunteerPanel.jsx
│   │         ├── pages
│   │         │   ├── Home.jsx
│   │         │   ├── Dashboard.jsx
│   │         │   ├── App.css
│             │   └── Alerts.jsx
│
├── backend
│   ├── main.py
│   ├── distress_detection.py
│   ├── location_service.py
│   └── alert_system.py
│
└── model
    └── distress_model.pkl
```

---

# ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
https://github.com/Aryan029-cs/SafeNest-AI
```

---

### 2️⃣ Backend Setup

```
cd backend
pip install fastapi uvicorn
python -m uvicorn main:app --reload
```

Backend will run at:

```
http://127.0.0.1:8000
http://127.0.0.1:8000/docs
```

---

### 3️⃣ Frontend Setup

```
cd frontend
npm install
npm start
```

Frontend will run at:

```
http://localhost:3000
```

---

# 🎯 Hackathon Impact

SafeNest AI demonstrates how **AI + community collaboration** can improve public safety.

Potential real-world applications:

• Women safety systems
• Smart city safety networks
• Emergency response platforms
• Campus security systems

---

# 🔮 Future Improvements

• Real AI scream detection model
• Integration with police/emergency APIs
• Mobile application version
• Crime prediction using AI
• Real-time volunteer map

---

# 👨‍💻 Team- Jb Coders
**Anjali**
**Aryan Chandra Singh**
**Aman Kumar Singh**
**Aman alam**
B.Tech Computer Science
JB Institute of Technology, Dehradun

---

# ⭐ Acknowledgement

This project was developed as part of a **hackathon innovation challenge** to explore AI-driven safety solutions.
# PPT Submission
Link : https://drive.google.com/file/d/1aht4RBVMPGsDudMoeHg93PnP3oBeNWfA/view?usp=drivesdk
# Pitch Video 
https://drive.google.com/file/d/115KAYa7TzTGAv9vInwnXvS6gk5lI9
# Demo Video
https://safe-nest-ai-iota.vercel.app

