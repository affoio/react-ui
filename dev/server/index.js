/* eslint consistent-return:0 import/order:0 */

import express from 'express';
import logger from './logger';
import openBrowser from 'react-dev-utils/openBrowser';
import argv from './argv';
import port from './port';
import setup from './middlewares/frontendMiddleware';
import { resolve } from 'path';

const app = express();

setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

// Start your app.
app.listen(port, host, async err => {
  if (err) {
    return logger.error(err.message);
  }

  logger.appStarted(port, prettyHost);

  openBrowser(`http://${prettyHost}:${port}/`);
});
