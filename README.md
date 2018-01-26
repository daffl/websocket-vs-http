# websocket-vs-http

REST HTTP vs Websockets: A performance comparison

## Installation and start

Clone the repository and in the folder run

```
npm install
```

To start the server run

```
npm start
```

It will be available at [localhost:3030](http://localhost:3030) with the `messages` endpoint responding at [localhost:3030/messages/test](http://localhost:3030/messages/test).

## Running benchmarks

To run the benchmarks run `npm run benchmark`. You can change the parameters with the `-a` and `-m` settings in the `autocannon` and `websocket-bench` sections in the `package.json` `scripts` section.
