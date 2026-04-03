# Finance Dashboard

A clean, responsive, and interactive Finance Dashboard built with **React** and **Tailwind CSS**.  
This project allows users to track financial activity, explore transactions, visualize spending patterns, and simulate role-based UI behavior.

---

### 🏠 Dashboard

<img width="1919" height="965" alt="Screenshot 2026-04-03 234634" src="https://github.com/user-attachments/assets/a5c6aaa7-c48a-4c5a-80fa-51cb3cc6a557" />


### Admin

<img width="1918" height="960" alt="Screenshot 2026-04-03 234649" src="https://github.com/user-attachments/assets/facb04a7-5fb7-46b0-897d-d2f6d8321908" />


### DarkMode

<img width="1919" height="964" alt="Screenshot 2026-04-03 234705" src="https://github.com/user-attachments/assets/bf014ff8-d7c4-4d7d-9d13-bde4511ee2ad" />



## Table of Contents

- [Demo](#demo)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Project Structure](#project-structure)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Future Enhancements](#future-enhancements)  

---

## Features

- **Dashboard Overview**: Total Balance, Income, Expenses summary cards  
- **Charts & Visualizations**:
  - Pie chart for spending by category  
  - Bar chart for monthly balance trend  
- **Transactions Section**:  
  - Search/filter by category  
  - Role-based actions (Admin can edit/delete, Viewer can only view)  
- **Insights**: Highest spending category, monthly comparison, balance change  
- **Dark Mode** toggle  
- **Responsive Design**: Works on mobile, tablet, and desktop  

---

## Tech Stack

- **Frontend**: React, Tailwind CSS  
- **State Management**: React Context API  
- **Charts**: Recharts  
- **Mock Data**: Static JSON (`data/mockdata.js`)  

---

## Project Structure

```text
finance-dashboard/
│
├── public/
│   └── index.html
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   ├── index.css
│   │
│   ├── context/
│   │   └── AppContext.jsx
│   │
│   ├── data/
│   │   └── mockdata.js
│   │
│   ├── pages/
│   │   └── Dashboard.jsx
│   │
│   └── components/
│       ├── DarkModeToggle.jsx
│       ├── RoleSwitcher.jsx
│       ├── SummaryCard.jsx
│       ├── TransactionTable.jsx
│       ├── Charts.jsx
│       └── Insights.jsx
│
└── package.json



## 🛠️ Installation

To run this project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Sarvesh7617/Finance-Dashboard.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd finance-dashboard
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

6. **Run the development server:**

   ```bash
   npm run dev
   ```
Open http://localhost:5173 to view in the browser.

---


## Usage
- Toggle Dark Mode using the switch
- Switch roles between Viewer and Admin
- Admin can edit/delete transactions
- Explore charts and insights to understand spending patterns



## Future Enhancements

- Connect to real backend/API for persistent data
- CSV/JSON export of transactions
- Advanced filtering and grouping by category or month
- Smooth animations and transitions
- Authentication & full role-based access control
