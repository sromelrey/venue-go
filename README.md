# VenueGo

**VenueGo** is a sports venue booking platform designed to connect customers with sports venue owners. The platform allows customers to discover venues, check court availability, and book sports facilities such as basketball and pickleball courts.

The platform is being developed as a multi-application monorepo, with separate applications for the customer-facing web experience, venue-owner portal, mobile application, and backend API.

---

## 📌 Current Version

### V1 — Sports Venue Booking Platform

The current version focuses on the core venue discovery, availability, and booking experience, including:

- Venue Discovery
- Sports Venue Management
- Court Management
- Court Availability
- Booking & Reservation Management
- Booking Status & Lifecycle
- Venue Owner Management
- Schedule Management
- Available Slot Management
- Customer Booking Experience

The platform is designed around two primary users:

- **Customers** — discover venues, check availability, and make bookings.
- **Venue Owners** — manage venues, courts, schedules, availability, and reservations.

---

## 🔮 Planned Features

### Mobile Application

A React Native mobile application is planned as the next phase of VenueGo to extend the booking experience to mobile users.

Planned capabilities may include:

- Mobile Venue Discovery
- Mobile Court Availability
- Mobile Booking
- Reservation Management
- Booking History
- Customer Notifications
- Customer Account Management

> **The React Native mobile application is planned and should not be considered part of the completed web implementation until developed.**

---

## 🧩 Project Structure

VenueGo is organized as a monorepo containing three frontend/application projects and a backend API.

### 🌐 VenueGo Portal

**Path:** `portal.venue-go.com`

**Tech Stack:**

- TypeScript
- Next.js
- React
- Tailwind CSS

**Description:**

The venue-owner portal used to manage sports venues, courts, schedules, available slots, and customer reservations.

---

### 📱 VenueGo Mobile

**Path:** `mobile.venue-go.com`

**Tech Stack:**

- React Native
- TypeScript

**Description:**

The planned mobile application for customers to discover sports venues, check availability, and make bookings.

> **Mobile development is planned and may not yet be fully implemented.**

---

### 🔌 VenueGo API

**Path:** `api.venue-go.com`

**Tech Stack:**

- TypeScript
- NestJS
- PostgreSQL
- REST API

**Description:**

The backend API responsible for authentication, authorization, venue management, court management, availability scheduling, booking workflows, reservation management, business logic, and data management.

---

## 🔄 Booking Flow

The core VenueGo booking flow is designed around:

```text
Customer
   ↓
Discover Venue
   ↓
Select Sport / Court
   ↓
View Availability
   ↓
Select Date & Time
   ↓
Create Booking
   ↓
Reservation Confirmation
   ↓
Venue Owner
   ↓
Manage Reservation
```

---

## 🏟️ Core Domain

VenueGo is centered around the relationship between:

```text
Venue
   ↓
Courts
   ↓
Schedules
   ↓
Available Slots
   ↓
Bookings
   ↓
Customers
```

Venue owners control the operational availability of their facilities, while customers interact with the available schedules to make reservations.

---

## 🔐 Authentication & Authorization

The platform uses application-level authentication and authorization to protect customer and venue-owner functionality.

The backend API is responsible for:

- Authentication
- Session Management
- Authorization
- Role-Based Access Control
- Protected API Endpoints
- User Access Management

Authorization should be enforced at the API level rather than relying only on frontend UI restrictions.

---

## 🚀 Goal

To provide a **simple, reliable, and scalable sports venue booking platform** that makes it easier for customers to find and reserve sports facilities while giving venue owners the tools needed to manage courts, schedules, availability, and reservations.

The long-term goal is to provide a unified booking experience across **web and mobile platforms**.

---

## 📁 Folder Structure

```text
.
├── docs/
│   ├── frontend/ # Frontend architecture, features, components, and implementation documentation
│   ├── backend/  # Backend architecture, APIs, business logic, and data flow documentation
│   └── mobile/   # Mobile application architecture and implementation documentation
│
├── portal.venue-go.com/ # Venue-owner web portal
│
├── mobile.venue-go.com/ # Customer mobile application
│
└── api.venue-go.com/    # Backend API for business logic, bookings, venue management, and data
```

---

## 🛠️ Development

VenueGo is maintained as a **single monorepo**.

Each application lives inside its own directory while sharing the same root Git repository:

```text
venue-go/
├── .git/
├── api.venue-go.com/
├── mobile.venue-go.com/
└── portal.venue-go.com/
```

This structure allows the applications to be developed independently while keeping the entire VenueGo platform within a single repository.

---

## 📚 Documentation

Project documentation is organized under:

```text
docs/
├── frontend/
├── backend/
└── mobile/
```

Documentation should cover:

- Architecture
- Project Structure
- API Documentation
- Database Design
- Authentication
- Authorization
- Booking Workflows
- Venue Management
- Court Management
- Availability Rules
- Development Standards
- Deployment
- Technical Decisions
