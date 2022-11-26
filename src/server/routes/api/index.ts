// /routes/api/api_index.ts

import * as express from 'express';

import skillRouter from './skillRoutes';
import questRouter from './questRoutes';

const apiRouter = express.Router();

// Current Route is /api
apiRouter.use('/skills', skillRouter);
apiRouter.use('/quests', questRouter);

export default apiRouter;
