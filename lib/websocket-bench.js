module.exports = {
  /**
   * On client connection (required)
   * @param {client} client connection
   * @param {done} callback function(err) {}
   */
  onConnect (client, done) {
    done();
  },

  /**
   * Send a message (required)
   * @param {client} client connection
   * @param {done} callback function(err) {}
   */
  sendMessage (client, done) {
    client.send('get', 'messages', 'test', (error, data) => {
      done(error);
    });
  },

  options: {}
};