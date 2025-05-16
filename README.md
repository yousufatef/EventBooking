# 🎟️ Event Booking System

A full-stack event booking platform that allows users to browse and book events, manage their bookings, and includes an integrated admin panel for event management. Built with the support of AI tools like ChatGPT and GitHub Copilot.

---

## 🛠 Tech Stack

### 🔧 Framework & Runtime
- **Next.js** `15.3.1` (App Router + TurboPack)
- **React** `19.0.0`
- **TypeScript** `^5`
- **Node.js** (for server runtime)

### 🎨 Styling & UI
- **Tailwind CSS** `^4`
- **tw-animate-css** – Animation utilities for Tailwind
- **next-themes** – Dark mode support
- **clsx** & **class-variance-authority** – Utility class merging
- **framer-motion** – Component animations
- **lucide-react** – Icon set
- **Radix UI** components:
  - `@radix-ui/react-dialog`, `popover`, `tooltip`, `select`, `slider`, etc.

### 📑 Forms & Validation
- **react-hook-form** – React form state manager
- **@hookform/resolvers** – Connects form validation with Zod
- **zod** – Schema validation

### 🔐 Authentication
- **@clerk/nextjs** – Authentication and user session management
- **@clerk/themes** – Customizable Clerk UI

### 📆 Date & Time
- **date-fns** – Date/time manipulation
- **react-datepicker** – Date picker UI

### 📤 Uploads & Files
- **uploadthing** & **@uploadthing/react** – File upload API + UI integration

### 🗃️ Database & Backend
- **mongoose** – ODM for MongoDB
- **svix** – Webhooks engine (Clerk integration)

### 🧰 Dev & Tooling
- **ESLint** `^9` – Linting and code style
- **@tailwindcss/postcss** – Tailwind/PostCSS integration
- **@types/** – TypeScript definitions for Node & React

---

## 📌 Features

### 🔐 Authentication
- User registration & login
- Role-based access (User / Admin)

### 🏠 User Interface
- Grid layout of events on home page
- Booked events marked as **"Booked"**
- "Book Now" button available for unbooked events
- Full event details and congratulations page

### 🧾 Admin Panel
- Admin access via role-based login
- Create, Read, Update, Delete (CRUD) for events

### 🔁 API
- RESTful API with routes for:
  - Authentication
  - Event management
  - Bookings

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm / yarn
- MongoDB (Atlas or local)

### Backend Setup

```bash
cd server
npm install
# .env configuration (example):
# MONGO_URI=your_mongo_url
# JWT_SECRET=your_jwt_secret
npm run dev
