# Prescripto - Doctor Appointment Booking System

A full-stack web application for booking doctor appointments with separate interfaces for patients, doctors, and administrators.

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account
- Cloudinary account

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Prescripto-main
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   npm run server
   ```

3. **Frontend Setup**
   ```bash
   cd Frontend
   npm install
   npm run dev
   ```

4. **Admin Panel Setup**
   ```bash
   cd admin
   npm install
   npm run dev
   ```

## 📁 Project Structure

```
Prescripto-main/
├── backend/                 # Node.js Express Server
├── Frontend/               # React User Interface
├── admin/                  # React Admin Panel
└── README.md
```

## 🔧 Backend (`/backend`)

**Main Files:**
- `server.js` - Express server entry point with WebSocket support
- `.env` - Environment variables (MongoDB, Cloudinary, JWT secrets)

**Folders:**
- `config/` - Database and Cloudinary configuration
  - `mongodb.js` - MongoDB connection setup
  - `cloudinary.js` - Cloudinary configuration for image uploads
- `controllers/` - Business logic for API endpoints
  - `userController.js` - User registration, login, appointments
  - `doctorController.js` - Doctor login, appointments, profile
  - `adminController.js` - Admin login, doctor management
- `models/` - MongoDB schemas
  - `userModel.js` - User data structure
  - `doctorModel.js` - Doctor data structure
  - `appointmentModel.js` - Appointment data structure
- `routes/` - API route definitions
  - `userRoutes.js` - User-related endpoints
  - `doctorRoute.js` - Doctor-related endpoints
  - `adminRoute.js` - Admin-related endpoints
- `middlewares/` - Authentication and file upload
  - `authUser.js` - User authentication middleware
  - `authDoctor.js` - Doctor authentication middleware
  - `authAdmin.js` - Admin authentication middleware
  - `multer.js` - File upload configuration
- `ws/` - WebSocket for real-time features
  - `userManager.js` - WebSocket user management
  - `roomManager.js` - WebSocket room management

**Utility Scripts:**
- `seedDoctorsWithCloudinary.js` - Populate database with sample doctors
- `uploadDoctorImages.js` - Upload doctor images to Cloudinary
- `checkDoctors.js` - Verify doctors in database

## 🎨 Frontend (`/Frontend`)

**Main Files:**
- `src/main.jsx` - React app entry point
- `src/App.jsx` - Main app component with routing
- `index.html` - HTML template

**Folders:**
- `src/assets/` - Images and static files
  - `assets.js` - Asset imports and doctor data
  - `doc1.png` to `doc15.png` - Doctor profile images
- `src/components/` - Reusable React components
  - `Navbar.jsx` - Navigation bar
  - `Header.jsx` - Homepage header
  - `TopDoctors.jsx` - Featured doctors section
  - `SpecialityMenu.jsx` - Medical specialties
  - `Donor.jsx` - Organ donor portal section
  - `Banner.jsx` - Call-to-action banner
  - `Footer.jsx` - Website footer
  - `RelatedDoctors.jsx` - Related doctor suggestions
- `src/pages/` - Main application pages
  - `Home.jsx` - Homepage
  - `Login.jsx` - User login/registration
  - `Doctor.jsx` - Doctor listing page
  - `Appointment.jsx` - Book appointment page
  - `MyAppointments.jsx` - User's appointments
  - `MyProfile.jsx` - User profile management
  - `About.jsx` - About page
  - `Contact.jsx` - Contact page
- `src/context/` - React Context for state management
  - `AppContext.jsx` - Global app state (doctors, user data)

**Configuration:**
- `tailwind.config.js` - Tailwind CSS configuration
- `vite.config.js` - Vite build configuration
- `.env` - Frontend environment variables

## 👨‍💼 Admin Panel (`/admin`)

**Main Files:**
- `src/main.jsx` - Admin app entry point
- `src/App.jsx` - Admin routing and layout

**Folders:**
- `src/Pages/` - Admin interface pages
  - `Login.jsx` - Admin/Doctor login
  - `Admin/` - Admin-specific pages
    - `Dashboard.jsx` - Admin dashboard
    - `AddDoctor.jsx` - Add new doctors
    - `DoctorsList.jsx` - Manage doctors
    - `AllAppointments.jsx` - View all appointments
  - `Doctor/` - Doctor-specific pages
    - `DoctorDashboard.jsx` - Doctor dashboard
    - `DoctorAppointments.jsx` - Doctor's appointments
    - `DoctorProfile.jsx` - Doctor profile management
- `src/components/` - Admin UI components
  - `Navbar.jsx` - Admin navigation
  - `Sidebar.jsx` - Admin sidebar menu
- `src/context/` - Admin state management
  - `AdminContext.jsx` - Admin-specific state
  - `DoctorContext.jsx` - Doctor-specific state
  - `AppContext.jsx` - Shared admin state
- `src/assets/` - Admin panel icons and images

## 🔐 Authentication & Security

**User Types:**
- **Patients** - Register, login, book appointments
- **Doctors** - Login, manage appointments, update profile
- **Admin** - Login, manage doctors, view all appointments

**Security Features:**
- JWT token authentication
- Password hashing with bcrypt
- Protected routes with middleware
- Input validation

## 🌐 API Endpoints

**User Routes (`/api/user/`):**
- `POST /register` - User registration
- `POST /login` - User login
- `GET /get-profile` - Get user profile
- `POST /book-appointment` - Book appointment
- `GET /appointments` - Get user appointments

**Doctor Routes (`/api/doctor/`):**
- `GET /list` - Get all doctors
- `POST /login` - Doctor login
- `GET /appointments` - Get doctor appointments
- `POST /complete-appointment` - Mark appointment complete
- `GET /dashboard` - Get doctor dashboard data

**Admin Routes (`/api/admin/`):**
- `POST /login` - Admin login
- `POST /add-doctor` - Add new doctor
- `GET /appointments` - Get all appointments
- `POST /cancel-appointment` - Cancel appointment

## 🎯 Key Features

- **Responsive Design** - Works on desktop and mobile
- **Real-time Updates** - WebSocket integration
- **Image Upload** - Cloudinary integration
- **Payment Integration** - Razorpay support
- **Appointment Management** - Book, cancel, complete appointments
- **User Profiles** - Manage personal information
- **Admin Dashboard** - Comprehensive management interface
- **Organ Donor Portal** - Connect to external donor management system

## 🔧 Environment Variables

**Backend (.env):**
```
MONGODB_URI=your_mongodb_connection_string
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
JWT_SECRET=your_jwt_secret
ADMIN_EMAIL=admin@prescripto.com
ADMIN_PASSWORD=your_admin_password
```

**Frontend (.env):**
```
VITE_BACKEND_URL=http://localhost:4000
```

## 🚀 Deployment

1. **Backend** - Deploy to services like Heroku, Railway, or Render
2. **Frontend** - Deploy to Vercel, Netlify, or similar
3. **Admin Panel** - Deploy separately or as subdomain

## 📱 Default Login Credentials

**Admin:**
- Email: `admin@prescripto.com`
- Password: `qwerty123`

**Sample Doctor:**
- Email: `richard@prescripto.com`
- Password: `doctor123`

## 🛠️ Technologies Used

- **Frontend:** React, Tailwind CSS, Vite
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** JWT, bcrypt
- **File Upload:** Cloudinary, Multer
- **Payment:** Razorpay
- **Real-time:** Socket.io
- **Styling:** Tailwind CSS

## 📞 Support

For issues or questions, please check the code comments or create an issue in the repository.