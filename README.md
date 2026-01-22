# Chess Titans Academy

A professional chess coaching platform where International Masters provide personalized training, group coaching, tournament preparation, and online courses to chess enthusiasts of all levels.

## Project Overview

Chess Titans Academy is a modern, responsive web application built for chess coaching and education. It features:

- **Private 1-on-1 Coaching**: Personalized lessons tailored to individual playing styles
- **Group Training**: Small group sessions for competitive learning
- **Tournament Preparation**: Intensive preparation for upcoming competitions
- **Online Courses**: Self-paced structured programs
- **Free Consultations**: 30-minute strategy sessions to discuss goals and create improvement plans

## Getting Started

### Prerequisites

- Node.js & npm installed ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating))

### Installation

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd chesscode

# Step 3: Install dependencies
npm i

# Step 4: Start the development server
npm run dev
```

The application will be available at `http://localhost:8080`

## Technologies Used

This project is built with:

- **Vite** - Next generation frontend tooling
- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn-ui** - High-quality React component library
- **React Router** - Client-side routing

## Project Structure

```
src/
├── components/
│   ├── home/           # Homepage sections
│   ├── layout/         # Layout components (Navbar, Footer)
│   └── ui/             # Reusable UI components
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── assets/             # Images and static files
```

## Available Scripts

```sh
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## Deployment process

Build the project for production:

```sh
npm run build
```

The output will be in the `dist/` folder, ready to be deployed to any static hosting service.

## Contact

For inquiries about coaching services, visit the contact page or email: coach@chesstitans.com
