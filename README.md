# 🍋 Little Lemon Restaurant Web Application

A full-featured, responsive, and accessible React web application for **Little Lemon Restaurant**, built as the Capstone Project for the Meta Front-End Developer Certificate.

This project includes a fully functional table reservation system, dynamic state management, custom UI/UX styling based on design guidelines, and unit test coverage.

---

## 📑 Project Criteria & Implementation Checklist

This project has been structured and developed to meet all peer-review evaluation criteria:

* [x] **UX/UI Design & Implementation:** Styled precisely using Little Lemon's brand guidelines (`Markazi Text` and `Karla` typography, primary green `#495E57`, and yellow `#F4CE14` color palette).
* [x] **Accessibility (a11y):** Built using proper ARIA attributes (`aria-label`, `aria-required`, `role`), screen-reader friendly form elements, and high-contrast color ratios compliant with WCAG standards.
* [x] **Semantic HTML & Responsiveness:** Clean layout structured with `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>`. Fully responsive across mobile, tablet, and desktop viewports using CSS Grid & Flexbox.
* [x] **Functional Booking Form & Validation:** Client-side form validation with real-time feedback, field constraints (date, time, number of guests, seating location), and edge-case handling.
* [x] **Error Handling & Edge Cases:** User friendly error alerts, disabled submission states for invalid inputs, and fallbacks for failed API responses.
* [x] **Unit Testing:** Integrated unit tests written with **Jest** and **React Testing Library** for component rendering, state updates, and form submission logic.
* [x] **Code Quality & Maintenance:** Modular file structure with clean, self-documenting code and clear inline comments explaining state management and hooks.
* [x] **Version Control:** Complete commit history hosted on GitHub.

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) and `npm` installed on your system, as well as a code editor such as **Visual Studio Code**.

---

## 🛠️ Installation & Setup

1. **Clone the Repository**  
   Open your terminal/command prompt and run:
   ```bash
   git clone https://github.com/daniudan/capstone.git
   cd your folder name
   ```

2. **Install Project Dependencies**  
   Install the required Node packages (including React core packages):
   ```bash
   npm install
   ```

3. **Install React Router DOM**  
   Install the routing library for navigation across components/views:
   ```bash
   npm install react-router-dom
   ```

4. **Run the Application**  
   Start the local development server:
   ```bash
   npm start
   ```
   The application will automatically open in your default browser at `http://localhost:3000`.

---

## 📱 Features & Usage Guide

### 1. Responsive Design Testing
* Open your web browser's **Developer Tools** (Press `F12` or `Right-Click` -> **Inspect**).
* Toggle the **Device Toolbar** (`Ctrl + Shift + M` / `Cmd + Shift + M`) and adjust the screen viewport width to test responsiveness across desktop, tablet, and mobile breakpoints.

### 2. Table Reservation Process
* Navigate to the **Reservation** menu from the navigation bar.
* Input your booking details and select any desired date.
* Submit the reservation form.

### 3. Dynamic Date & Booking Management
* Upon successful submission, your booking will instantly appear in the **Reservation List**.
* The selected date will automatically be removed from available selection slots to ensure double-booking prevention.

---

## 🧰 Tech Stack

* **Frontend Framework:** React.js
* **Routing:** React Router DOM
* **Styling:** CSS3 / Responsive Layouts
