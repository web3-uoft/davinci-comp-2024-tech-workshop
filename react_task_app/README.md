# React Task App - Davinci Competition 2024 Tech Workshop

The **React Task App** repository is built for the **Davinci Competition 2024 Tech Workshop** and serves as a crash course introduction to React.js fundamentals, covering essential concepts like components, JSX (JavaScript XML), state management, and props. Participants will learn how to build a simple task manager application by applying these concepts.

## Project Overview

This project demonstrates how to create a task manager application using **React.js**. The app allows users to:

- Add new tasks with a description and deadline.
- Mark tasks as complete or incomplete.
- Remove tasks from the list.

The purpose of this app is to give participants hands-on experience with the basics of React.js, including component architecture, managing state, and passing data between components using props.

## Features

- **Components**: The app is divided into reusable components (`TaskItem`, `TaskList`, `TaskAddForm`, `TaskContainer`).
- **JSX**: Demonstrates how to use JSX to write HTML inside JavaScript.
- **State Management**: Shows how to manage and update application state with React's `useState` hook.
- **Props**: Data is passed between components via props, allowing the app to be dynamic and reusable.

## Tech Stack

- **React.js**: A JavaScript library for building user interfaces.
- **Materialize CSS**: A responsive CSS framework used for UI styling.
- **JavaScript**: Core language used to write components and logic.

## Getting Started

Follow these steps to set up the project locally:

### Prerequisites

- **Node.js**: You need to have Node.js installed. [Download Node.js](https://nodejs.org/)
- **npm**: Comes with Node.js, used to manage dependencies.

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/react-task-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd react-task-app
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

   The app will automatically open in your browser at `http://localhost:3000`.

## Project Structure

```
src/
├── components/
│   ├── TaskAddForm.js     # Form to add new tasks
│   ├── TaskItem.js        # Represents individual task
│   ├── TaskList.js        # Displays the list of tasks
│   └── TaskContainer.js   # Main container that manages the state and renders the task list
├── App.js                 # Entry point of the app
└── index.js               # Main file that renders the App component
```

## Workshop Objective

During the **Davinci Competition 2024 Tech Workshop**, participants will learn:
- The basics of React components and how they help build modular UIs.
- How JSX simplifies writing HTML elements in JavaScript.
- The concept of `state` to manage dynamic data in the application.
- How to pass `props` from one component to another to share information.

## License

This project is open-source and available under the MIT License.