# MyChat Server

Welcome to MyChat Server, the backend / REST API for the MyChat application built with **expressjs**.

## Features

- MyChat server is a REST API which provides endpoints for creating users, authenticating users, sending messages, etc.
- It has database integration, it stores conversations, messages, and user profile data securely.
- It uses socket.io for real-time communication.
- It supports user authentication and authorization with JWT.

## Technologies used

- Nodejs
- Expressjs
- Mongodb

## Libraries used

- bcrypt : for hashing passwords
- cors : to enable cors
- jsonwebtoken : to generate and manage JWT tokens
- mongoose : Mongodb object modeling tool
- socket.io : for real-time communication

## Getting started

1. Clone this repo.
2. Navigate to project directory.
3. Install dependencies using `npm install`.
4. Set up a mongodb database and configure the connection.
5. Start the server with `npm start`.
6. The server will be running on the specified port, ready to handle requests from the MyChat client.

Feel free to explore the codebase and contribute to make MyChat even better!
