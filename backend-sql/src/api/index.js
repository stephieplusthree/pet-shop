const express = require('express');
const cors = require('cors');
const app = express();
const authMiddleware = require('../auth/authMiddleware');
const {
  init: databaseInit,
  middleware: databaseMiddleware,
} = require('../database/databaseInit');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

databaseInit().catch((error) => console.error(error));
app.use(cors({ origin: true }));
app.use(databaseMiddleware);
app.use(authMiddleware);
app.use(bodyParser.json());

const routes = express.Router();
require('./auditLog')(routes);
require('./auth')(routes);
require('./file')(routes);
require('./iam')(routes);
require('./settings')(routes);
require('./pet')(routes);
require('./booking')(routes);
app.use('/api', routes);

const frontendDir = path.join(
  __dirname,
  '../../../frontend/build',
);

if (fs.existsSync(frontendDir)) {
  app.use('/', express.static(frontendDir));

  app.get('*', function(request, response) {
    response.sendFile(
      path.resolve(frontendDir, 'index.html'),
    );
  });
}

module.exports = app;
