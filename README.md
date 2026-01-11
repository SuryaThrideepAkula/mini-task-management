# Mini Task Management System

[cite_start]A responsive, high-performance task management interface built with **React**, **Redux Toolkit**, and **Tailwind CSS** within an **NX Monorepo**[cite: 4, 21].

## 🎯 Objective
The primary goal of this project is to demonstrate frontend engineering best practices, including:
* [cite_start]**Clean Code & Structure**: Organized folder hierarchy and separation of concerns[cite: 5, 30].
* [cite_start]**State Management**: Scalable global state using Redux Toolkit[cite: 18].
* [cite_start]**Responsive UI**: A mobile-first design that adapts to all screen sizes[cite: 12, 17].
* [cite_start]**TypeScript Mastery**: Strong typing for data integrity and developer experience[cite: 15].

---

## 🛠️ Technical Stack
* [cite_start]**Framework**: React 18+ with TypeScript[cite: 15].
* [cite_start]**Monorepo**: NX Build System[cite: 21].
* [cite_start]**Styling**: Tailwind CSS[cite: 16].
* [cite_start]**State Management**: Redux Toolkit (Data & UI state)[cite: 18].
* **Icons**: Lucide-React.

---

## 🏗️ Architecture Overview
[cite_start]The application follows a modular architecture designed for scalability within a monorepo[cite: 30]:

* **State Strategy**: For this implementation, **Redux Toolkit** handles the "Mock API" data layer and UI interactions (like modal visibility).
* **Component Design**: 
    - **App**: Orchestrates the layout and connects to the Redux store.
    - **TaskCard**: A pure UI component that handles individual task display and status updates.
    - **TaskForm**: Manages input state and performs validation before dispatching actions.
* [cite_start]**Layout**: A 12-column grid system using Tailwind CSS to ensure seamless transitions between mobile, tablet, and desktop views.



---

## 🚀 Setup and Installation

### Prerequisites
* Node.js (v18 or higher)
* npm or yarn

### Steps to Run
1. **Clone the project**:
   ```bash
   git clone <your-repository-url>
   cd task-manager

Install dependencies:

Bash

npm install
Run the application:

Bash

npx nx serve @task-manager/web
Access the app at http://localhost:4200.

✅ Functional Features

View Tasks: Displayed in a responsive grid with status-based color coding.


Create Task: Includes validation logic (minimum title length).


Update Status: Instant UI updates via Redux when switching between Todo, In Progress, and Done.


Responsiveness: Optimized for all device categories.

⚖️ Trade-offs & Decisions 


State Management: While the brief suggested GraphQL, I prioritized a robust Redux Toolkit implementation to demonstrate complex client-side state handling and mock-API logic within the 4-6 hour timeframe.

Data Persistence: Tasks are stored in memory via Redux. For a production environment, I would integrate Apollo GraphQL Client for server-side persistence.


Bundling: Used Webpack (default NX setup) to ensure compatibility and stability as requested.


Error Handling: Implemented basic form validation and empty-state displays to ensure a professional user experience.

📁 Folder Structure

apps/web/src/
├── app/
│   ├── components/  # Reusable UI components
│   ├── store/       # Redux Toolkit slices and configuration
│   ├── types/       # TypeScript interfaces and enums
│   └── app.tsx      # Main layout and entry point
└── main.tsx         # Root provider setup
