# Web Test App

A modern React application built with TypeScript, Vite, and TailwindCSS.

## Live Preview
Check out the live demo: [demo](https://web-test-app-ochre.vercel.app)

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation
1. Clone the repository:
```bash
git clone https://github.com/ptimer/web-test-app.git
cd web-test-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production
```bash
npm run build
```

## Project Structure

```
web-test-app/
├── src/
│   ├── components/    # Reusable React components
│   ├── constants/     # Application constants and configuration
│   ├── pages/         # Page components for different routes
│   ├── types/         # TypeScript type definitions
│   ├── App.tsx        # Main application component
│   ├── main.tsx       # Application entry point
│   └── index.css      # Global styles
├── public/            # Public static files
├── index.html         # HTML entry point
└── vite.config.ts     # Vite configuration
```

## Implementation Details

### Routing
The application uses React Router for navigation. The main routes are defined in `App.tsx`:
- `/` - Redirects to `/overview`
- `/overview` - Overview page
- `/users` - Users management page
- `/settings` - Application settings page

### State Management
The application uses React's built-in state management with hooks:
- `useState` for local component state
- `useContext` for global state management

### Components
The application follows a component-based architecture:
- `components/` directory contains reusable UI components
- `pages/` directory contains page-level components
- Components are built using TypeScript for type safety
- Styling is implemented using TailwindCSS for responsive design

### Technologies Used
- React 19
- TypeScript
- Vite
- React Router
- TailwindCSS
- ESLint for code quality
- Axios for HTTP requests

## Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### Code Style
The project uses ESLint for code quality and consistency. The configuration can be found in `eslint.config.js`.
