# Book&Stay – Hotel Booking Platform

Book&Stay is a full-stack hotel booking web application built using the **MERN Stack**.  
It allows users to explore hotels, check room availability, book rooms, leave reviews, and manage bookings with secure authentication and payment integration.

The platform is designed with a modern UI, responsive design, and scalable backend architecture.

---

## 🚀 Live Demo
🔗 Live Website: https://book-n-stay.vercel.app  
🔗 GitHub Repository: https://github.com/YOUR_USERNAME/YOUR_REPO

---

# ✨ Features

### 👤 User Features
- Secure Authentication using **Clerk**
- Browse available hotels and rooms
- Check room availability by date
- Book hotel rooms
- Pay online using **Stripe**
- Write and read customer reviews
- View personal booking history
- Responsive UI for all devices

### 🏨 Hotel Owner Features
- Manage hotel rooms
- View booking statistics
- Track revenue and reservations

---

# 🛠️ Tech Stack

## Frontend
- React (Vite)
- Tailwind CSS
- React Router DOM
- Axios
- Lucide React Icons
- Framer Motion
- React Hot Toast

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Clerk Authentication
- Cloudinary (Image Storage)
- Multer (File Uploads)
- Stripe (Payment Integration)
- Nodemailer (Email Notifications)

---

# 📦 Packages & Libraries

## Client Side
- React (Vite Setup)
- Tailwind CSS
- React Router DOM
- Lucide React Icons
- Clerk Authentication
- Axios
- React Hot Toast
- Framer Motion

## Server Side
- Express
- Dotenv
- Cors
- Mongoose
- Cloudinary
- Multer
- Svix
- Nodemon
- Clerk Express
- Nodemailer
- Stripe

---

# 📂 Project Structure
```
Book&Stay
│
├── client
│ ├── components
│ ├── pages
│ ├── context
│ ├── assets
│ └── App.jsx
│
├── server
│ ├── controllers
│ ├── models
│ ├── routes
│ ├── middleware
│ └── server.js
```

---

# ⚙️ Environment Variables

Create a `.env` file in the server directory and add:


- MONGODB_URI=
- CLERK_SECRET_KEY=
- CLOUDINARY_CLOUD_NAME=
- CLOUDINARY_API_KEY=
- CLOUDINARY_API_SECRET=
- STRIPE_SECRET_KEY=
- EMAIL_USER=
- EMAIL_PASS=


---

# ▶️ Running the Project Locally

## 1️⃣ Clone the Repository
```
git clone https://github.com/Ayman-Kz25/BookNStay
```

## 2️⃣ Install Dependencies

### Client
```
cd client
npm install
npm run dev
```

### Server
```
cd server
npm install
npm run dev
```
