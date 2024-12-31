# Todo List App
This is a web application built with React (frontend) and Node.js (backend) to perform CRUD operations (Create, Read, Update, Delete) on tasks. The app uses MongoDB for data storage.

# Project Structure
The project consists of two main parts:

## 1. Frontend
Built with React.
Handles the user interface and interacts with the backend through API calls.
## 2. Backend
Powered by Node.js.
Provides API endpoints for managing tasks in the MongoDB database.



# Getting Started

## Frontend (React)

1. Navigate to the front directory:
   
   ```cd front```
   
2. Install dependencies:
   
   ```npm install```
   
3. Start the server:
   
    ```npm run dev```


## Backend (Node.js)

1. Navigate to the back directory:

    ```cd back```

2. Install dependencies:
  
    ```npm install```
  
3. Create a .env file in the root directory of the backend.

4. Add the following to the .env file (replace {{URL CONNECTS TO MongoDB}} with your actual MongoDB connection string):

    ```MONGODB_URL="{{URL CONNECTS TO MongoDB}}"```

5. Start the Node.js server:
   
    ```npx nodemon server```


## MongoDB
1. Create a `todoList` database.

2. Inside the `todoList` database, create a `todos` collection.



# Technologies Used

## Frontend:

React
HTML/CSS/JavaScript

## Backend:

Node.js
Express.js

## Database:

MongoDB

# Features
Add new tasks.
View all tasks.
Edit existing tasks.
Delete tasks.

# Setup Requirements
Node.js: Ensure Node.js is installed on your system.
MongoDB: Set up a MongoDB instance and configure the connection in the backend.
