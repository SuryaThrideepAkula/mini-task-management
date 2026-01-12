# Mini Task Management System

A modern, responsive task management application built with **React**, **Redux Toolkit**, and **Tailwind CSS** within an **NX Monorepo** architecture.

## 🎯 Objective
The primary goal of this project is to demonstrate frontend engineering best practices, including:
* **Clean Code & Structure**: Organized folder hierarchy and a strict separation of concerns.
* **State Management**: Scalable global state management using Redux Toolkit.
* **Responsive UI**: A mobile-first design that adapts seamlessly to mobile, tablet, and desktop views.
* **TypeScript Mastery**: Strong typing for data integrity and an enhanced developer experience.



---

## 🏗️ Architecture & Decisions
* **NX Monorepo**: Utilized to provide a professional, enterprise-ready project structure. The frontend is contained within `apps/web`.
* **State Management**: **Redux Toolkit** serves as the single source of truth for both task data and UI state (such as modal visibility).
* **Styling**: **Tailwind CSS** was used for a utility-first approach to styling, ensuring a highly responsive and performant UI.
* **Layout**: A flexible grid system that transitions from 1 column on mobile to 3 columns on desktop.

---

## 🚀 Setup and Installation

### Prerequisites
* **Node.js**: Version 18 or higher.
* **Package Manager**: npm.

### Installation
1. **Clone the repository**:
   ```bash
   git clone <your-repository-url>
   cd task-manager
   ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the application**:
    ```bash
    npx nx serve @task-manager/web
    ```

Access the app at http://localhost:4200.

---

## ✅ Functional Features

View Tasks: Displayed in a responsive grid with status-based color coding.


Create Task: Includes validation logic (minimum title length).


Update Status: Instant UI updates via Redux when switching between Todo, In Progress, and Done.


Responsiveness: Optimized for all device categories.

---

## ⚖️ Trade-offs & Decisions 


State Management: While the brief suggested GraphQL, I prioritized a robust Redux Toolkit implementation to demonstrate complex client-side state handling and mock-API logic within the 4-6 hour timeframe.

Data Persistence: Tasks are stored in memory via Redux. For a production environment, I would integrate Apollo GraphQL Client for server-side persistence.


Bundling: Used Webpack (default NX setup) to ensure compatibility and stability as requested.


Error Handling: Implemented basic form validation and empty-state displays to ensure a professional user experience.

---

## 📁 Folder Structure

```text
apps/web/src/
├── main.tsx              # Root entry point
└── app/
    ├── app.tsx           # Main layout and entry point
    ├── types.ts          # TypeScript interfaces and enums
    ├── components/       # Reusable UI components (TaskCard, TaskForm)
    └── store/            # Redux Toolkit slices and configuration
```
