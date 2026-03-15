# NSSCE College Union Portal

## Full-Stack College Union Portal

Modern responsive website for NSS College of Engineering Union with complete backend APIs and MongoDB integration.

## Tech Stack

**Frontend:** React 19 + Tailwind CSS + Framer Motion + Vite
**Backend:** Node.js + Express + MongoDB + JWT Auth
**Features:** Responsive design, animations, complaint system, admin dashboard ready

## Quick Start

### 1. Frontend (Current Directory)
```bash
npm install
npm run dev
```
Frontend runs on http://localhost:5173

### 2. Backend
```bash
cd backend
cp .env.example .env
# Edit .env with your MongoDB URI and JWT_SECRET
npm install
npm run dev
```
Backend runs on http://localhost:5000

### 3. MongoDB
- Local: Install MongoDB and start service
- Cloud: Use MongoDB Atlas, update MONGODB_URI in backend/.env

### 4. Test APIs
```bash
curl http://localhost:5000/
curl -X POST http://localhost:5000/api/admin/login -H "Content-Type: application/json" -d '{"username":"admin","password":"password123"}'
```

## Features Implemented

✅ **Frontend:** Navbar, Hero, About Union/College, Departments, Events, Gallery, Complaint Form, Announcements, Testimonials, Contact
✅ **Backend:** Full REST APIs for complaints, events, announcements, gallery, admin auth
✅ **Responsive:** Mobile-first design with smooth animations
✅ **Security:** JWT auth, file upload validation, rate limiting

## Admin Credentials (First time setup)
Create admin in MongoDB:
```javascript
// In Mongo shell or Compass
db.admins.insertOne({
  username: "admin",
  password: "$2a$12$..." // bcrypt hash of "password123"
})
```

## File Structure
```
├── backend/           # Express APIs + MongoDB
├── src/components/    # React components
├── public/           # Static assets
└── TODO.md           # Progress tracking
```

## Next Steps
- Connect frontend to real APIs
- Admin dashboard implementation
- File upload integration
- Production deployment

**Live Demo:** Frontend at http://localhost:5173 | Backend API docs at http://localhost:5000/

