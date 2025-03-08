# Stateful Counter

Welcome to **Stateful Counter** - a simple toy app designed for the workshop: "Docker Demystified".

The application simply keeps a record of how long it has been running, by consistently calculating the elapsed time from an initial starting value, initialised when the app is started.

You can pass environment variables when starting the server, to affect the background colour of the app, and give the instance a label. This will be useful later when create multiple instances in Docker containers.

## Instructions for Use

Assuming that you have **cloned this repo** and have a [working installation of NodeJS](https://nodejs.org/en/download), you can set up & run the app locally with the following commands:

```bash
# inside the 'stateful-counter' directory:

npm install # installs the app's dependencies

npm start # accesses the 'start' script in the file 'package.json'

# optional:
node server.js # this command is all that 'npm start' is doing.
```

If you would like to try running the app with the environment variables, you can do the following:

```bash
CONTAINER_LABEL="My Container" CONTAINER_COLOUR="hotpink" node server.js
```
To stop the server, simply use `Ctrl-C` on Windows or `⌘ Command + C` on Mac OS.
