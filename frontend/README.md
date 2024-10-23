# Firebase Task App - Davinci Competition 2024 Tech Workshop

The **Firebase Task App** repository is built for the **Davinci Competition 2024 Tech Workshop** and serves as a crash course introduction to **Firebase** integration with **React.js**, covering essential backend concepts such as Firestore database interaction, managing data using API routes, and handling CRUD operations. Participants will learn how to build a simple task manager application that leverages Firebase for data persistence.

## Project Overview

This project demonstrates how to create a task manager application using **React.js** and **Firebase**. The app allows users to:

- Add new tasks with a description and deadline, stored in Firestore.
- Mark tasks as complete or incomplete by updating their status in the Firestore database.
- Remove tasks from Firestore.
- Fetch tasks from Firestore and display them in real-time.

The purpose of this app is to give participants hands-on experience with integrating React.js with Firebase, focusing on Firestore for database management and using Next.js API routes for backend functionality.

## Features

- **Firebase Firestore Integration**: The app uses Firebase Firestore to store, update, and retrieve tasks.
- **API Routes**: Next.js API routes are used to communicate with Firebase, handling CRUD operations for tasks.
- **Components**: The app is modular, broken down into reusable components (`TaskItem`, `TaskList`, `TaskAddForm`, `TaskContainer`).
- **State Management**: React's `useState` and `useEffect` hooks are used to manage tasks and trigger updates on data changes.
- **Props**: Data is passed between components via props, allowing the app to be dynamic and reusable.

## Tech Stack

- **React.js**: A JavaScript library for building user interfaces.
- **Firebase Firestore**: A NoSQL cloud database used for storing task data.
- **Next.js**: A React framework for server-side rendering and API routes.
- **Materialize CSS**: A responsive CSS framework used for UI styling.
- **JavaScript**: Core language used to write components and logic.

## Getting Started

Follow these steps to set up the project locally:

### Prerequisites

- **Node.js**: You need to have Node.js installed. [Download Node.js](https://nodejs.org/)
- **npm**: Comes with Node.js, used to manage dependencies.
- **Firebase Account**: Create a Firebase project and set up Firestore. [Get started with Firebase](https://firebase.google.com/)

### Firebase Setup

1. Go to the Firebase Console and create a new project.
2. Set up Firestore in your project.
3. Get your Firebase configuration and add it to your app.

### Installation

1. Install the required dependencies:
   ```bash
   npm install
   ```

2. Add your Firebase configuration:
   - Create a `.env.local` file in the root of the project.
   - Add the following Firebase credentials:
     ```
     NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
     NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
     NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
     NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
     NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
     NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
     ```

3. Start the development server:
   ```bash
   npm run dev
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
├── pages/api/route.js     # Next.js API route for handling Firebase task operations
├── utils/db.js            # Firebase initialization and Firestore setup
├── App.js                 # Entry point of the app
└── index.js               # Main file that renders the App component
```

## Workshop Objective

During the **Davinci Competition 2024 Tech Workshop**, participants will learn:
- How to set up Firebase Firestore and integrate it with a React application.
- How to use Next.js API routes to handle backend logic, such as adding, updating, and removing tasks from Firestore.
- How to build modular, reusable components in React.js.
- Managing state in React using `useState` and how `useEffect` is used to fetch and update data.
- How to handle CRUD operations using Firebase as the backend.

## License

This project is open-source and available under the MIT License.