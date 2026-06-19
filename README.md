# 🚗 Cars Selling App

A full-stack web application for buying and selling cars online. Users can browse available cars, view car details, purchase cars, explore spare parts, and manage their accounts securely.

---

## 📌 Features

### 👤 User Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* Logout Functionality

### 🚘 Car Marketplace

* Browse Available Cars
* View Car Details
* Purchase Cars
* Responsive Design

### 🔧 Spare Parts Section

* Browse Car Parts
* View Part Details
* Purchase Parts

### 📄 Additional Features

* About Us Page
* Contact Page
* Responsive UI
* MongoDB Database Integration

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* Bootstrap/CSS

### Backend

* Node.js
* Express.js
* JWT Authentication
* Express Validator

### Database

* MongoDB Atlas
* Mongoose

### Deployment

* Frontend: Render
* Backend: Render
* Database: MongoDB Atlas

---

## 📂 Project Structure

```bash
Cars-Selling-App/
│
├── Frontend/
│   ├── src/
│   │   ├── Components/
│   │   ├── Pages/
│   │   ├── img/
│   │   ├── App.jsx
│   │   └── main.jsx
│
├── Backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── middlewares/
│   ├── db/
│   ├── app.js
│   └── server.js
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/Cars-Selling-App.git
cd Cars-Selling-App
```

### Backend Setup

```bash
cd Backend
npm install
```

Create a `.env` file:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start Backend:

```bash
npm start
```

---

### Frontend Setup

```bash
cd Frontend
npm install
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

## 🌐 Environment Variables

Backend requires:

```env
PORT=3000
MONGODB_URI=your_mongodb_atlas_uri
JWT_SECRET=your_jwt_secret
```

---

## 🚀 Deployment

### MongoDB Atlas

1. Create Cluster
2. Create Database User
3. Add IP Access:

   ```
   0.0.0.0/0
   ```
4. Copy Connection String

### Render Deployment

#### Backend

Add Environment Variables:

```env
MONGODB_URI=your_connection_string
JWT_SECRET=your_secret
PORT=3000
```

#### Frontend

Update API URL:

```javascript
const API_URL = "https://your-backend-url.onrender.com";
```

Deploy frontend and backend services on Render.

---

## 📸 Screenshots

* Home Page
* Car Listings
* Car Details
* Spare Parts
* Login Page
* Register Page

(Add screenshots here)

---

## 🔮 Future Enhancements

* Admin Dashboard
* Car Search & Filters
* Online Payment Gateway
* Wishlist Feature
* User Reviews & Ratings
* Image Upload for Cars
* Order Tracking

---

## 👨‍💻 Author

**Bhushan Ahire**

GitHub: https://github.com/your-github-username

---

## 📜 License

This project is developed for educational and learning purposes.
