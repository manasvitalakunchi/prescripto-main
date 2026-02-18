# Prescripto - Technical Components Guide

## 🔧 React Hooks Used

### State Management Hooks
- **`useState`** - Manages component state
  - **What**: Stores form data, toggles, loading states
  - **Why**: React needs to track changing data and re-render UI
  - **Example**: `const [email, setEmail] = useState('')` for login forms

- **`useEffect`** - Handles side effects
  - **What**: API calls, subscriptions, cleanup
  - **Why**: Separate side effects from rendering logic
  - **Example**: `useEffect(() => { fetchDoctors() }, [])` to load data on mount

- **`useContext`** - Accesses global state
  - **What**: Gets shared data without prop drilling
  - **Why**: Avoid passing props through multiple components
  - **Example**: `const { token, user } = useContext(AppContext)` for auth data

- **`useNavigate`** - Programmatic navigation
  - **What**: Navigate between pages in code
  - **Why**: Redirect after login, form submission
  - **Example**: `navigate('/dashboard')` after successful login

- **`useParams`** - URL parameters
  - **What**: Extract dynamic values from URL
  - **Why**: Get doctor ID, appointment ID from route
  - **Example**: `const { docId } = useParams()` from `/appointment/:docId`

## 🎨 HTML Elements & Tags

### Form Elements
- `<form>` - Login, registration, appointment forms
- `<input>` - Text, email, password, file, checkbox inputs
- `<button>` - Submit buttons, action buttons
- `<select>` - Dropdown selections
- `<textarea>` - Multi-line text input

### Layout Elements
- `<div>` - Container elements
- `<img>` - Doctor images, icons
- `<p>` - Text content
- `<h1>`, `<h2>` - Headings
- `<span>` - Inline text styling

### Interactive Elements
- `<a>` - Links (rare, mostly using React Router)
- Clickable divs with onClick handlers

## ⚛️ React Components

### Functional Components
All components are functional components using hooks

### Component Types
- **Page Components** - Full page views (Home, Login, Dashboard)
- **Layout Components** - Navbar, Sidebar, Footer
- **Feature Components** - TopDoctors, SpecialityMenu, Banner
- **Form Components** - Login forms, appointment booking
- **Card Components** - Doctor cards, appointment cards

### Component Structure & Real Examples
```jsx
// Login Component Example
const Login = () => {
  // Hooks - State management
  const [email, setEmail] = useState('')        // Form input state
  const [password, setPassword] = useState('')  // Form input state
  const [state, setState] = useState('Login')   // Toggle login/signup
  
  // Hooks - Navigation & Context
  const navigate = useNavigate()                // For redirecting after login
  const { token, setToken } = useContext(AppContext) // Global auth state
  
  // Hooks - Side effects
  useEffect(() => {
    if (token) navigate('/')  // Redirect if already logged in
  }, [token])
  
  // Event handlers
  const handleSubmit = async (e) => {
    e.preventDefault()  // Prevent page refresh
    // API call to login user
    const response = await axios.post('/api/user/login', { email, password })
    if (response.data.success) {
      setToken(response.data.token)  // Save auth token
      navigate('/')  // Redirect to home
    }
  }
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value)  // Update email state
  }
  
  // Return JSX - UI Structure
  return (
    <form onSubmit={handleSubmit} className='min-h-[80vh] flex items-center'>
      <div className='border rounded-xl p-8'>
        <input 
          type="email" 
          value={email}
          onChange={handleEmailChange}
          className='border rounded w-full p-2'
        />
        <button type="submit" className='bg-primary text-white py-2'>
          Login
        </button>
      </div>
    </form>
  )
}
```

### Why This Structure?
- **Hooks at Top** - React requirement
  - **Why**: React needs consistent hook order between renders
  - **Rule**: Always call hooks in same order, never in loops/conditions
  - **Example**: All useState, useEffect calls at component start

- **Event Handlers in Middle** - Logical organization
  - **Why**: Separate business logic from UI rendering
  - **Benefit**: Easier to test, debug, and maintain
  - **Example**: All onClick, onChange functions before JSX

- **JSX at Bottom** - Clean separation
  - **Why**: Clear distinction between logic and presentation
  - **Benefit**: Easy to find UI structure, modify styling
  - **Example**: Single return statement with complete UI

### Custom Hooks Used
- **Context Hooks** - Access global state
  - **What**: `useContext(AppContext)`, `useContext(AdminContext)`
  - **Why**: Get shared data without prop drilling
  - **Example**: `const { doctors, token } = useContext(AppContext)`

- **Combined Hooks** - Multiple hooks working together
  - **What**: useState + useEffect for data fetching
  - **Why**: Manage related state and side effects
  - **Example**: Load user profile when token changes

## 🎯 Event Handlers

### Common Events Used
- **`onClick`** - Handle button/element clicks
  - **What**: Responds to user clicks
  - **Why**: Navigate, submit forms, toggle states
  - **Example**: `onClick={() => navigate('/login')}` for navigation buttons

- **`onChange`** - Handle input changes
  - **What**: Captures form input changes
  - **Why**: Update state as user types
  - **Example**: `onChange={(e) => setEmail(e.target.value)}` for form inputs

- **`onSubmit`** - Handle form submissions
  - **What**: Process form data when submitted
  - **Why**: Validate and send data to server
  - **Example**: `onSubmit={handleLogin}` for login forms

### Event Handler Patterns
```jsx
// Navigation handler
const handleDoctorClick = (doctorId) => {
  navigate(`/appointment/${doctorId}`)
}

// Form input handler
const handleEmailChange = (e) => {
  setEmail(e.target.value)
}

// Form submission handler
const handleSubmit = async (e) => {
  e.preventDefault()
  // API call logic
}
```

## 🎨 CSS & Styling

### Tailwind CSS Classes
- **Layout**: `flex`, `grid`, `container`
- **Spacing**: `p-4`, `m-2`, `gap-3`
- **Colors**: `bg-blue-500`, `text-gray-600`
- **Sizing**: `w-full`, `h-screen`, `max-w-md`
- **Responsive**: `sm:`, `md:`, `lg:`
- **Hover**: `hover:bg-blue-50`, `hover:translate-y-[-10px]`
- **Transitions**: `transition-all`, `duration-500`

### Custom CSS
- Minimal custom CSS in `index.css`
- Mostly Tailwind utility classes

## 🔄 State Management

### Context API
```jsx
// Create Context
const AppContext = createContext()

// Provider Component
const AppContextProvider = ({ children }) => {
  const [state, setState] = useState()
  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  )
}

// Use Context
const { state, setState } = useContext(AppContext)
```

### State Types
- **Local State** - Component-specific data
- **Global State** - Shared across components (user, doctors)
- **Form State** - Input values, validation

## 🌐 API Integration

### Axios HTTP Client
```jsx
// GET Request
const { data } = await axios.get(url, { headers })

// POST Request  
const { data } = await axios.post(url, body, { headers })
```

### API Patterns
- Try-catch error handling
- Loading states
- Success/error notifications with react-toastify

## 🛣️ Routing

### React Router DOM
```jsx
// Router Setup
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
  </Routes>
</BrowserRouter>

// Navigation
const navigate = useNavigate()
navigate('/path')

// URL Parameters
const { id } = useParams()
```

## 🔐 Authentication

### JWT Tokens
- Stored in localStorage
- Sent in request headers
- Used for protected routes

### Auth Flow
1. Login → Get token
2. Store token → localStorage
3. Send token → API requests
4. Verify token → Backend middleware

## 📱 Responsive Design

### Tailwind Breakpoints
- `sm:` - Small screens (640px+)
- `md:` - Medium screens (768px+)
- `lg:` - Large screens (1024px+)

### Mobile-First Approach
- Base styles for mobile
- Responsive classes for larger screens

## 🎭 Animations & Effects

### CSS Transitions
- `transition-all duration-500`
- `hover:translate-y-[-10px]`
- `animate-[fadeInUp_0.6s_ease-out]`

### Interactive Effects
- Hover animations on cards
- Button hover states
- Form focus states

## 📦 Key Libraries

### Frontend Dependencies
- `react` - UI library
- `react-router-dom` - Routing
- `axios` - HTTP client
- `react-toastify` - Notifications
- `tailwindcss` - Styling
- `vite` - Build tool

### Backend Dependencies
- `express` - Web framework
- `mongoose` - MongoDB ODM
- `bcryptjs` - Password hashing
- `jsonwebtoken` - JWT tokens
- `multer` - File uploads
- `cloudinary` - Image storage
- `socket.io` - WebSockets

## 🏗️ Project Architecture

### Frontend Structure
```
src/
├── components/     # Reusable UI components
├── pages/         # Route components
├── context/       # State management
├── assets/        # Images, icons
└── main.jsx       # App entry point
```

### Backend Structure
```
backend/
├── controllers/   # Business logic
├── models/       # Database schemas
├── routes/       # API endpoints
├── middlewares/  # Auth, validation
└── server.js     # Server entry point
```

## 🔧 Development Tools

### Build Tools
- **Vite** - Fast build tool for frontend
- **Nodemon** - Auto-restart for backend development

### Code Quality
- **ESLint** - Code linting
- **Prettier** - Code formatting (if configured)

## 🚀 Deployment Considerations

### Environment Variables
- Different configs for dev/prod
- Secure API keys and secrets
- Database connection strings

### Build Process
- `npm run build` - Production build
- Static file serving
- API deployment to cloud services