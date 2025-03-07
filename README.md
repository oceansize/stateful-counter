# Stateful Counter

Simple stateful counter for a Docker workshop.

You can pass environment variables when starting the server, to affect the background colour of the app, and give the instance a label. This will be useful later when students create multiple instances in Docker containers.

You can try this functionality locally by running:

```bash
CONTAINER_LABEL="My Container" CONTAINER_COLOR="hotpink" node server.js
```