const path = require('path');
const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');
const authentication = require('@feathersjs/authentication');
const jwt = require('@feathersjs/authentication-jwt');

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
app.configure(authentication({
  secret: 'featherssupsersecret'
}));
// JWT auth
app.configure(jwt());

app.configure(socketio());
// Register a messages service with pagination
app.use('/messages', {
  async get (id) {
    return { id };
  }
});
// Users service
app.use('/users', {
  async get (id) {
    return { id };
  }
});
// Register a nicer error handler than the default Express one
app.use(express.errorHandler());

app.service('messages').hooks({
  before: authentication.hooks.authenticate('jwt')
});


app.service('authentication').create({}, {
  payload: {
    userId: 'test'
  }
}).then(console.log);

// Start the server
app.listen(port).on('listening', () =>
  console.log(`Feathers server listening on localhost:${port}`)
);
