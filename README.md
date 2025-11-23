# Full-Stack Starter Project

A modern full-stack application starter template featuring React, TypeScript, Node.js, Express, and database integrations. This project provides a solid foundation for building scalable web applications with best practices and modern tooling.

## 🚀 Features

### Frontend (React + TypeScript + Vite)
- ⚛️ **React 19** with TypeScript for type-safe development
- ⚡ **Vite** for lightning-fast development and optimized builds
- 🎨 **Responsive UI** with reusable components (Button, Card, Input)
- 🌙 **Dark mode support** built into all components
- 📱 **Mobile-first design** with responsive layouts
- 🎯 **Type-safe API client** with proper error handling

### Backend (Node.js + Express + TypeScript)
- 🚀 **Express.js** with TypeScript for robust server-side development
- 📁 **Clean architecture** with controllers, routes, and middleware
- 🗄️ **Database templates** for both MongoDB and PostgreSQL
- 🔐 **Authentication structure** ready for JWT implementation
- ⚡ **Hot reload** with nodemon for rapid development
- ✅ **Error handling** middleware for consistent error responses

### Developer Experience
- 🛠️ **ESLint + Prettier** configured for both frontend and backend
- 📝 **TypeScript** throughout the entire stack
- 🔥 **Hot Module Replacement (HMR)** for instant feedback
- 📦 **Organized folder structure** following best practices
- 🎯 **Example API endpoints** demonstrating CRUD operations

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **MongoDB** (optional, if using MongoDB)
- **PostgreSQL** (optional, if using PostgreSQL)

## 🏁 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Guasapa/Gerard-s-projects.git
cd Gerard-s-projects
```

### 2. Install dependencies

#### Backend setup
```bash
cd server
npm install
cp .env.example .env
# Edit .env with your configuration
```

#### Frontend setup
```bash
cd ../client
npm install
cp .env.example .env
# Edit .env with your API URL if different from default
```

### 3. Configure environment variables

#### Server (.env)
```env
PORT=5000
NODE_ENV=development

# Choose one database type and configure accordingly:

# MongoDB
MONGODB_URI=mongodb://localhost:27017/fullstack-starter

# PostgreSQL
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_DB=fullstack_starter
POSTGRES_USER=postgres
POSTGRES_PASSWORD=password

# JWT (for future auth implementation)
JWT_SECRET=your-secret-key-change-this-in-production
JWT_EXPIRE=7d
```

#### Client (.env)
```env
VITE_API_URL=http://localhost:5000
```

### 4. Run the application

#### Development mode

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd client
npm run dev
```

The frontend will be available at `http://localhost:5173`
The backend API will be available at `http://localhost:5000`

#### Production build

**Backend:**
```bash
cd server
npm run build
npm start
```

**Frontend:**
```bash
cd client
npm run build
npm run preview
```

## 📁 Project Structure

```
Gerard-s-projects/
├── client/                      # Frontend application
│   ├── src/
│   │   ├── components/         # React components
│   │   │   ├── common/        # Reusable UI components
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Card.tsx
│   │   │   │   └── Input.tsx
│   │   │   └── layout/        # Layout components
│   │   │       ├── Header.tsx
│   │   │       └── Footer.tsx
│   │   ├── services/          # API services
│   │   │   └── api.ts
│   │   ├── types/             # TypeScript type definitions
│   │   ├── utils/             # Utility functions
│   │   ├── App.tsx            # Main App component
│   │   └── main.tsx           # Entry point
│   ├── .prettierrc            # Prettier configuration
│   ├── eslint.config.js       # ESLint configuration
│   ├── vite.config.ts         # Vite configuration
│   └── package.json
│
├── server/                     # Backend application
│   ├── src/
│   │   ├── controllers/       # Request handlers
│   │   │   └── exampleController.ts
│   │   ├── routes/            # API routes
│   │   │   └── exampleRoutes.ts
│   │   ├── middleware/        # Custom middleware
│   │   │   ├── errorHandler.ts
│   │   │   └── logger.ts
│   │   ├── models/            # Database models
│   │   │   └── User.ts
│   │   ├── config/            # Configuration files
│   │   │   ├── mongodb.ts
│   │   │   └── postgresql.ts
│   │   ├── auth/              # Authentication (structure only)
│   │   │   ├── authController.ts
│   │   │   ├── authRoutes.ts
│   │   │   └── middleware.ts
│   │   └── index.ts           # Entry point
│   ├── .prettierrc            # Prettier configuration
│   ├── eslint.config.js       # ESLint configuration
│   ├── tsconfig.json          # TypeScript configuration
│   └── package.json
│
└── README.md                   # This file
```

## 🔧 Available Scripts

### Frontend (client/)

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors automatically
- `npm run format` - Format code with Prettier

### Backend (server/)

- `npm run dev` - Start development server with hot reload
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Run compiled production code
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors automatically
- `npm run format` - Format code with Prettier

## 🗄️ Database Setup

### MongoDB

1. Install MongoDB locally or use MongoDB Atlas
2. Update `MONGODB_URI` in server/.env
3. Uncomment the MongoDB connection in `server/src/index.ts`

```typescript
import connectMongoDB from './config/mongodb';
connectMongoDB();
```

### PostgreSQL

1. Install PostgreSQL locally
2. Create a database:
```bash
createdb fullstack_starter
```
3. Update PostgreSQL credentials in server/.env
4. Uncomment the PostgreSQL connection in `server/src/index.ts`

```typescript
import { connectPostgreSQL } from './config/postgresql';
connectPostgreSQL();
```

## 🔐 Authentication (Future Implementation)

The authentication structure is already in place but not implemented. To add authentication:

1. Install required packages:
```bash
cd server
npm install bcryptjs jsonwebtoken
npm install -D @types/bcryptjs @types/jsonwebtoken
```

2. Implement the authentication logic in:
   - `server/src/auth/authController.ts` - Registration, login, logout
   - `server/src/auth/middleware.ts` - JWT verification
   - `server/src/auth/authRoutes.ts` - Already configured

3. Add auth routes to main app in `server/src/index.ts`:
```typescript
import authRoutes from './auth/authRoutes';
app.use('/api/auth', authRoutes);
```

## 🎨 Component Library

The frontend includes pre-built, reusable components:

- **Button** - Multiple variants (primary, secondary, danger) and sizes
- **Card** - Container component with optional title
- **Input** - Form input with label, validation, and error display
- **Header** - Responsive navigation header
- **Footer** - Site footer with links

All components support dark mode and are fully responsive.

## 🌐 API Endpoints

### Examples API
- `GET /api/examples` - Get all examples
- `GET /api/examples/:id` - Get example by ID
- `POST /api/examples` - Create new example
- `PUT /api/examples/:id` - Update example
- `DELETE /api/examples/:id` - Delete example

### Authentication (Not yet implemented)
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)
- `POST /api/auth/logout` - Logout user (protected)

## 🛠️ Tech Stack

### Frontend
- React 19
- TypeScript
- Vite
- CSS3 (with CSS Modules support)

### Backend
- Node.js
- Express
- TypeScript
- MongoDB (Mongoose)
- PostgreSQL (node-postgres)

### Development Tools
- ESLint
- Prettier
- Nodemon
- ts-node

## 📝 Best Practices

- ✅ TypeScript for type safety across the entire stack
- ✅ Separation of concerns with clean architecture
- ✅ Error handling with custom middleware
- ✅ Environment-based configuration
- ✅ Code formatting with Prettier
- ✅ Linting with ESLint
- ✅ Responsive design principles
- ✅ RESTful API design

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

This starter template was created to help developers quickly bootstrap full-stack applications with modern tools and best practices.

---

**Happy Coding! 🚀**
