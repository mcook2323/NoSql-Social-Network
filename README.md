# NoSql Social Network

This project utilizes Express.js, Mongoose, Nodemon, and MongoDB to create a RESTful API for managing users, thoughts, reactions, and friend lists.

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.

## Usage

1. Start your MongoDB server.
2. Run `npm start` to start the server with Nodemon for automatic restart on changes.
3. Use Insomnia or any other API testing tool to interact with the routes.

## API Routes

### Users

#### GET `/api/users`

- Retrieves all users from the database.

#### POST `/api/users`

- Creates a new user.
- Requires a JSON body with the following fields:
  - `username`: String (required)
  - `email`: String (required)
  - `password`: String (required)

#### PUT `/api/users/:userId`

- Updates an existing user by ID.
- Requires a JSON body with the fields to be updated.

#### DELETE `/api/users/:userId`

- Deletes a user by ID.

### Thoughts

#### GET `/api/thoughts`

- Retrieves all thoughts from the database.

#### POST `/api/thoughts`

- Creates a new thought.
- Requires a JSON body with the following fields:
  - `thoughtText`: String (required)
  - `username`: String (required)

#### PUT `/api/thoughts/:thoughtId`

- Updates an existing thought by ID.
- Requires a JSON body with the fields to be updated.

#### DELETE `/api/thoughts/:thoughtId`

- Deletes a thought by ID.

### Reactions

#### POST `/api/thoughts/:thoughtId/reactions`

- Adds a reaction to a thought.
- Requires a JSON body with the following fields:
  - `reactionBody`: String (required)
  - `username`: String (required)

#### DELETE `/api/thoughts/:thoughtId/reactions/:reactionId`

- Deletes a reaction from a thought by reaction ID.

## Walkthrough Video

![Walkthrough Video](./Untitled_%20Apr%202,%202024%204_28%20PM.gif)

