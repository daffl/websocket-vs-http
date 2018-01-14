const path = require('path');
const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');

// Heroku will set the PORT environment variable. Otherwise use 3030
const port = process.env.PORT || 3030;

// Creates an Express compatible Feathers application
const app = express(feathers());

app.use('/', express.static(path.join(__dirname, '..', 'public')));
// Parse HTTP JSON bodies
app.use(express.json());
// Parse URL-encoded params
app.use(express.urlencoded({ extended: true }));
// Add REST API support
app.configure(express.rest());
// Configure Socket.io real-time APIs
app.configure(socketio());
// Register a messages service with pagination
app.use('/messages', {
  async create (data) {
    return data;
  }
});
// Register a nicer error handler than the default Express one
app.use(express.errorHandler());

// Start the server
app.listen(port).on('listening', () =>
  console.log(`Feathers server listening on localhost:${port}`)
);
