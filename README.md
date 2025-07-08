# learnHub
project structure
LearnHub/
│
├── 📁 backend/                 # Backend code (Node.js + Express + MongoDB)
│   ├── 📁 models/              # Mongoose models
│   │   ├── Course.js
│   │   └── User.js
│   │
│   ├── 📁 routes/              # All API endpoints
│   │   └── api.js
│   │
│   ├── .env                   # Environment variables (e.g., MONGO_URI)
│   ├── server.js              # Main Express server file
│   ├── package.json           # Node dependencies and scripts
│   └── package-lock.json
│
├── 📁 frontend/               # Frontend code (HTML + JS + Bootstrap)
│   ├── index.html             # Main UI for users and admin
│
├── 📁 node_modules/ (auto)    # Installed backend dependencies
│
└── README.md (optional)       # Project description and setup instructions

✅ Technologies Used
Frontend:

HTML5, CSS (via Bootstrap 5)

JavaScript (vanilla)

Axios (for API communication if used)

Backend:

Node.js

Express.js

Mongoose (MongoDB ODM)

MongoDB (database)

PDFKit (for certificate generation)

📄 License
You can use MIT License (commonly used for open-source educational projects):

MIT License

Copyright (c) 2025

Permission is hereby granted, free of charge, to any person obtaining a copy...

📝 Notes
Store secrets like MongoDB URIs in a .env file.

Run npm install before starting the backend server.

Use npm start to run the backend on http://localhost:5000.

Frontend is purely static (index.html) and interacts with backend via REST APIs.

Certificates are generated dynamically using PDFKit.

🚀 Installation Steps for LearnHub
1. Clone or Download the Project
If from GitHub:
git clone https://github.com/your-username/learnhub.git
cd learnhub
Or simply unzip the downloaded folder.

2. Install Node.js & npm
Download and install from https://nodejs.org

Confirm installation:
node -v
npm -v
3. Install Backend Dependencies
In the root folder (LearnHub):

npm install
This installs Express, Mongoose, PDFKit, and other dependencies.

4. Set Up MongoDB
Install MongoDB (if not already): https://www.mongodb.com/try/download/community

Start MongoDB server (mongod)

Optional: Use MongoDB Compass GUI to view your database.

5. Configure Environment Variables
Create a .env file inside the backend/ folder:

env
MONGO_URI=mongodb://localhost:27017/learnhub
This connects your backend to the local MongoDB database named learnhub.

6. Start the Backend Server
npm start
You should see: Server running on port 5000 and MongoDB Connected

7. Open the Frontend
Navigate to the frontend/ folder

Open index.html in a browser:

text
file:///C:/Users/yourname/Downloads/LearnHub/frontend/index.html
8. Test the Platform
Register a new user

Log in

Create a course

Enroll in a course

View enrolled courses

Generate certificate (after completing a course)
#zipfile : [LearnHub (1).zip](https://github.com/user-attachments/files/21129176/LearnHub.1.zip)
#demofile : https://drive.google.com/file/d/1zsWb7hA1qTlV9m53KfpnK1iNjRQBA97h/view?usp=sharing
