# Full-Stack Starter Project

A complete, production-ready full-stack starter template with modern technologies and best practices.

## 🚀 Tech Stack

### Frontend
- **React 19** - Modern UI library
- **Vite** - Lightning-fast build tool
- **TypeScript** - Type-safe development
- **TailwindCSS** - Utility-first CSS framework
- **Dark/Light Mode** - Built-in theme switching

### Backend
- **Node.js** - JavaScript runtime
- **Express 5** - Web application framework
- **TypeScript** - Type-safe backend development
- **RESTful API** - Clean API architecture

### Code Quality
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Static type checking

## 📁 Project Structure

```
.
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── common/     # Common components (Button, Card, Input)
│   │   │   └── ThemeToggle.tsx
│   │   ├── contexts/       # React contexts (Theme)
│   │   ├── hooks/          # Custom React hooks
│   │   │   ├── useFetch.ts
│   │   │   ├── useLocalStorage.ts
│   │   │   └── useDebounce.ts
│   │   ├── utils/          # Utility functions
│   │   ├── App.tsx         # Main application component
│   │   └── main.tsx        # Application entry point
│   ├── public/             # Static assets
│   └── package.json
│
├── server/                 # Backend Express application
│   ├── src/
│   │   ├── routes/         # API routes
│   │   ├── controllers/    # Request handlers
│   │   ├── middleware/     # Custom middleware
│   │   ├── config/         # Configuration files
│   │   │   ├── database.ts
│   │   │   ├── mongodb.ts (template)
│   │   │   └── postgresql.ts (template)
│   │   ├── auth/           # Authentication module (prepared)
│   │   ├── models/         # Data models
│   │   └── index.ts        # Server entry point
│   ├── .env.example        # Environment variables template
│   └── package.json
│
├── .prettierrc             # Prettier configuration
├── .eslintrc.js            # ESLint configuration
└── package.json            # Root package.json with scripts
```

## 🛠️ Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Gerard-s-projects
   ```

2. **Install all dependencies**
   ```bash
   npm run install:all
   ```

   Or install separately:
   ```bash
   # Root dependencies
   npm install

   # Frontend dependencies
   cd client && npm install

   # Backend dependencies
   cd ../server && npm install
   ```

3. **Set up environment variables**
   ```bash
   cd server
   cp .env.example .env
   # Edit .env with your configuration
   ```

### Development

#### Run Both Frontend and Backend
```bash
npm run dev
```

#### Run Separately

**Frontend (Port 5173)**
```bash
npm run dev:client
# or
cd client && npm run dev
```

**Backend (Port 5000)**
```bash
npm run dev:server
# or
cd server && npm run dev
```

### Building for Production

**Build both**
```bash
npm run build
```

**Build separately**
```bash
npm run build:client
npm run build:server
```

**Run production server**
```bash
cd server && npm start
```

## 🎨 Features

### Frontend Features

#### Reusable Components
- **Button** - Multiple variants (primary, secondary, outline) and sizes
- **Card** - Styled container component
- **Input** - Form input with label and error handling

#### Custom Hooks
- **useFetch** - Simplified data fetching with loading and error states
- **useLocalStorage** - Persistent local storage management
- **useDebounce** - Debounce values for optimized performance
- **useTheme** - Theme management (dark/light mode)

#### Dark/Light Mode
- Automatic theme persistence
- Smooth transitions
- TailwindCSS dark mode classes

### Backend Features

#### API Structure
- RESTful API design
- Route/Controller separation
- Centralized error handling
- Request logging middleware

#### Database Configuration
Choose your preferred database:
- **MongoDB** template (uncomment in `config/mongodb.ts`)
- **PostgreSQL** template (uncomment in `config/postgresql.ts`)

#### Authentication Ready
Auth module structure prepared in `server/src/auth/`:
- `authService.ts` - Authentication logic template
- `authController.ts` - Auth endpoints template
- `authRoutes.ts` - Auth routes template

To implement authentication:
1. Install dependencies: `npm install jsonwebtoken bcrypt`
2. Uncomment code in auth files
3. Configure JWT_SECRET in `.env`

## 🧪 Code Quality

### Linting
```bash
# Lint everything
npm run lint

# Lint with auto-fix
npm run lint:client
npm run lint:server
```

### Formatting
```bash
# Format all files
npm run format
```

## 📝 Environment Variables

Create a `.env` file in the `server` directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database (choose one)
MONGODB_URI=mongodb://localhost:27017/your-database
# or
DATABASE_URL=postgresql://user:password@localhost:5432/database

# JWT Configuration (when implementing auth)
JWT_SECRET=your-super-secret-key
```

## 🔧 Configuration

### Frontend Configuration
- **Vite Config**: `client/vite.config.ts`
- **TailwindCSS Config**: `client/tailwind.config.js`
- **TypeScript Config**: `client/tsconfig.json`

### Backend Configuration
- **TypeScript Config**: `server/tsconfig.json`
- **Server Config**: `server/src/index.ts`

## 📚 API Endpoints

### Health Check
```
GET /health
```

### User Routes (Example)
```
GET    /api/users      - Get all users
GET    /api/users/:id  - Get user by ID
POST   /api/users      - Create new user
PUT    /api/users/:id  - Update user
DELETE /api/users/:id  - Delete user
```

## 🚢 Deployment

### Frontend (Vercel, Netlify, etc.)
```bash
cd client
npm run build
# Deploy the 'dist' folder
```

### Backend (Heroku, Railway, etc.)
```bash
cd server
npm run build
# Deploy with start command: npm start
```

## 🤝 Contributing

Feel free to use this template for your projects!

## 📄 License

ISC

## 🎯 Next Steps

1. **Choose a database** - Uncomment MongoDB or PostgreSQL config
2. **Implement authentication** - Follow auth folder templates
3. **Add your business logic** - Create models and controllers
4. **Build your UI** - Use provided components and hooks
5. **Deploy** - Follow deployment instructions

---

**Built with ❤️ for rapid full-stack development**

