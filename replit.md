# Overview

This is a React-based meme coin website for "Live 24H Tate House" ($TATE), a Solana-based cryptocurrency that was banned from Pump.fun. The site presents itself as a livestream platform with a DeFi manifesto theme, featuring a dark cyberpunk aesthetic with neon accents. The application showcases the coin's story of censorship resistance and includes interactive elements like contract address copying and mock livestream interfaces.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React with TypeScript**: Modern React application using functional components and hooks
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Styling**: Tailwind CSS with custom dark theme and neon cyberpunk aesthetics
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Express.js**: RESTful API server with TypeScript
- **Modular Storage**: Interface-based storage system with in-memory implementation (MemStorage)
- **Route Registration**: Centralized route management system
- **Error Handling**: Global error middleware for consistent API responses
- **Development Integration**: Vite middleware integration for seamless full-stack development

## Database Design
- **Drizzle ORM**: Type-safe database interactions with PostgreSQL dialect
- **Schema Management**: Centralized schema definitions in shared directory
- **User Model**: Basic user entity with UUID primary keys, unique usernames, and password fields
- **Validation**: Zod schema validation for data integrity

## Development Workflow
- **Monorepo Structure**: Shared types and schemas between client and server
- **TypeScript Configuration**: Unified type checking across frontend and backend
- **Path Aliases**: Clean import paths using @ and @shared prefixes
- **Hot Reload**: Integrated development server with automatic reloading

## UI/UX Design Decisions
- **Dark Theme**: Cyberpunk aesthetic with neon color palette (primary red, secondary cyan, accent orange)
- **Component Architecture**: Reusable UI components following atomic design principles
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Accessibility**: Radix UI primitives ensure ARIA compliance and keyboard navigation
- **Animation System**: Custom CSS animations for neon glows and pulse effects

# External Dependencies

## Core Framework Dependencies
- **React 18**: Frontend framework with concurrent features
- **Express.js**: Backend web application framework
- **TypeScript**: Static type checking across the entire stack

## Database & ORM
- **Drizzle ORM**: Modern TypeScript ORM for PostgreSQL
- **Neon Database**: Serverless PostgreSQL database provider
- **Drizzle Kit**: Database migration and schema management tools

## UI & Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Shadcn/ui**: High-quality React component library
- **Radix UI**: Unstyled, accessible UI primitives
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Type-safe component variants

## Development & Build Tools
- **Vite**: Fast build tool and development server
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Tailwind integration
- **TSX**: TypeScript execution for development scripts

## State Management & Data Fetching
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form state management and validation
- **Zod**: Runtime type validation and schema definition

## Routing & Navigation
- **Wouter**: Lightweight React router
- **React Router concepts**: Standard routing patterns and navigation

## Development Experience
- **Replit Integration**: Specialized plugins for Replit development environment
- **Runtime Error Overlay**: Enhanced error reporting during development
- **Development Banner**: Environment-specific UI indicators