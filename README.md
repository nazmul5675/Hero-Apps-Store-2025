# 🚀 Hero Apps — Modern App Store Showcase

**Hero Apps** is a responsive React-based web application that simulates an app store experience.  
It allows users to browse, search, and install apps virtually, featuring interactive UI, dynamic routing, localStorage functionality, and responsive data visualization.

Live Demo 👉 [Visit Deployed Site](https://teal-longma-729500.netlify.app/)

---

## 🧩 Project Description

Hero Apps is designed to provide a seamless experience similar to browsing an app store like Google Play or Apple App Store.  
It demonstrates key frontend concepts such as routing, state management, data fetching from JSON, live search filtering, conditional rendering, sorting, and persistent state management with localStorage.

The project was built as part of a **React challenge assignment** focusing on:
- Dynamic routing using React Router
- Interactive Recharts visualization
- Custom error & loading pages
- Full localStorage-based installation system
- Smooth deployment on Netlify with SPA routing fix

---

## 🧱 Features

### 🏠 Home Page
- Responsive banner with action buttons: **App Store** & **Play Store**
- Interactive **States Section** with key metrics
- **Top Apps Section** displaying 8 featured apps
- “Show All” button to view all available apps

### 📱 All Apps Page
- Displays all apps from local JSON data (20 total)
- **Live Search** (case-insensitive) with “No App Found” feedback
- Displays app count, sorting, and filtering options
- Clickable cards navigate to individual app details

### 📊 App Details Page
- Displays image, company, downloads, ratings, and reviews
- “Install” button changes to “Installed” after click
- **Success Toast** confirmation on installation
- Fully **responsive Recharts bar chart** visualizing user ratings
- App description and purpose section styled per Figma layout

### 💾 My Installation Page
- Displays apps installed by the user
- **Uninstall** button removes app from both UI and `localStorage`
- Displays toasts for user feedback
- Includes **Sort by Downloads (High-Low / Low-High)** dropdown

### ⚙️ Additional Functionalities
- **Persistent data** stored using `localStorage`
- **Custom 404 Page** for invalid routes
- **Loading animation** during page navigation and search
- **SPA routing fixed** using `_redirects` file for Netlify

---

## 🧰 Technologies Used

| Category | Technologies |
|-----------|--------------|
| Frontend Framework | **React (Vite)** |
| Routing | **React Router DOM** |
| State Management | React Hooks (`useState`, `useEffect`) |
| Data Visualization | **Recharts** |
| Styling | Tailwind CSS / Custom CSS |
| Notifications | **React Toastify** (for success & info toasts) |
| Storage | Browser **LocalStorage** |
| Deployment | **Netlify** |
| Build Tool | **Vite** |

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

```bash
# 1. Clone this repository
git clone https://github.com/yourusername/hero-apps.git

# 2. Navigate to the project directory
cd hero-apps

# 3. Install dependencies
npm install

# 4. Run the development server
npm run dev

# 5. Build for production
npm run build

# 6. Preview the production build
npm run preview
