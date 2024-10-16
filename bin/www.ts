#!/usr/bin/env node

import app from '../app';
import http from 'http';

const port = normalizePort(process.env.PORT || '8000');
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Función para normalizar el puerto
function normalizePort(val: string) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}
