// /routes/routes_index/.ts

import * as express from 'express';
import apiRouter from './api/index';

const baseRouter = express.Router();

// Current route is /

baseRouter.use('/api', apiRouter);

export default baseRouter;
