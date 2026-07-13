# FoodyZone 🍔

FoodyZone is a dynamic full-stack food portal built using React.js and Express.js. The platform serves structured JSON data through a custom-built API, enabling users to explore dishes with instant UI filtering. It features high-performance client-side searching, category sorting, and an optimized modular UI.

🌐 **Live Demo:** [food-website-sable-nine.vercel.app](https://food-website-sable-nine.vercel.app/)

---

## 🌟 Key Features

- **Custom API Architecture:** Engineered a backend API using Express.js to reliably serve structured food items and pricing JSON data to the frontend.
- **Instant Search & Filter:** Implemented a high-performance search engine and real-time category filtering utilizing React state management for zero-latency UI updates.
- **Scoped Component Styling:** Utilized CSS Modules to ensure component-level style isolation, avoiding global class conflicts and maintaining clean layouts.
- **Efficient Static Assets Delivery:** Configured Express static middleware on the backend to optimize the delivery of product images and resources.

---

## 🛠️ Tech Stack

- **Frontend:** React.js, JavaScript (ES6+), CSS Modules
- **Backend:** Node.js, Express.js (REST APIs)
- **Deployment & Hosting:** Vercel / Render

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation & Local Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Ritik05ktr/Food-Website.git](https://github.com/Ritik05ktr/Food-Website.git)
   cd Food-Website

2.Backend Setup:
Navigate to the server/backend folder:
cd server
Install dependencies and start the API server:
npm install
npm start

The backend will run on the configured port (e.g., http://localhost:9000).

3.Frontend Setup:
Navigate to the client/frontend folder:
cd ../client
Install dependencies and start the development server:
npm install
npm run dev

Open the local server URL provided by Vite in your browser to interact with the app.


#Optimization & Architecture Highlights
State-Driven Performance: Handled filtered data structures entirely in the local React state, avoiding redundant network API requests during quick searches.

Middleware Efficiency: Used Express built-in static routing to optimize asset delivery, reducing load stress on the Node.js event loop.

Clean RESTful Design: Followed proper HTTP methods and status codes for clean client-server communication.
