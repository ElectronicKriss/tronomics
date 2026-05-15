# Tronomics - Risk Assessment, Talent & IT Solutions

A modern, full-stack website for Tronomics, a company specializing in risk assessment, talent solutions, and IT services for businesses.

## 🎯 Project Overview

Tronomics is a comprehensive web platform built with:

**Frontend:**
- React 19 with Vite
- React Router for navigation
- Tailwind CSS for styling
- Lucide React for icons

**Backend:**
- Node.js/Express API
- RESTful architecture
- Email & calendar integrations (ready to implement)

## ✨ Features

### Website Features
- ✅ Modern, responsive design with Tailwind CSS
- ✅ Interactive service cards and case studies
- ✅ Assessment Booking System with date/time picker
- ✅ Lead capture forms
- ✅ Contact management
- ✅ Blog/Knowledge Center structure
- ✅ Industries showcase
- ✅ Career page with job listings
- ✅ Responsive navigation with mobile menu
- ✅ SEO-optimized pages

### Backend API
- ✅ Booking management
- ✅ Contact form handling
- ✅ Lead capture and scoring
- ✅ Input validation
- ✅ Error handling
- ✅ CORS support

## 🚀 Quick Start

### Frontend Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5174`

3. **Build for production:**
   ```bash
   npm run build
   ```

### Backend Setup

1. **Navigate to server directory:**
   ```bash
   cd server
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create .env file:**
   ```bash
   cp .env.example .env
   ```

4. **Start server:**
   ```bash
   npm run dev
   ```
   Server will run on `http://localhost:3001`

## 📖 Pages & Features

### Homepage
- Hero section with compelling headline
- 3 core service pillars with visual cards
- Why Choose Us section with 5 key benefits
- Case studies preview
- Trust indicators (projects, clients, years)
- Call-to-action buttons

### Service Pages (3 Deep Dive Pages)
- **Risk Assessment**: Enterprise risk, HSE compliance, cyber risk, etc.
- **Talent Solutions**: Recruitment, outsourcing, executive search
- **IT Services**: Web development, cybersecurity, cloud, ERP/CRM

### Supporting Pages
- **About**: Mission, vision, values, team, timeline, certifications
- **Industries**: 6 industry verticals
- **Case Studies**: Detailed success stories with metrics
- **Blog**: Knowledge center
- **Careers**: Job listings, internship program, contractor network
- **Contact**: Contact form with location and hours
- **Booking**: Full assessment scheduling system

## 🔧 Tech Stack

### Frontend
- React 19
- React Router DOM
- Tailwind CSS
- Lucide React Icons
- Vite

### Backend
- Node.js
- Express
- Nodemailer (ready)
- Calendly Integration (ready)
- Zoom Integration (ready)

## 🔗 API Endpoints

### Bookings
```
POST /api/bookings          - Create booking
GET  /api/bookings          - Get all bookings
PATCH /api/bookings/:id     - Update booking
```

### Contacts
```
POST /api/contacts          - Submit contact form
GET  /api/contacts          - Get all contacts
```

### Leads
```
POST /api/leads             - Capture lead
GET  /api/leads             - Get all leads (sorted by score)
```

### Health
```
GET /api/health             - Server status
```

## 🎯 Project Status

✅ **Completed:**
- Frontend structure and routing
- All main pages
- Assessment Booking System
- Backend API scaffolding
- Data management layer
- Responsive design

🔄 **In Progress:**
- Backend API integration

📋 **TODO:**
- Database integration (PostgreSQL)
- Email notifications
- Calendar integrations
- Authentication
- Client dashboard
- Admin panel

## 📱 Responsive Design

All pages are fully responsive:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)

## 📚 Documentation

See [server/README.md](server/README.md) for detailed backend documentation.
# tronomics
