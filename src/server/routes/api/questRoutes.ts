import * as express from 'express';

const questRouter = express.Router();

// Current route is /api/quests

// Get quests from RS API

questRouter.get('/', async (req, res) => {
  const username = req.body.username;
  const apiURL: string = `https://apps.runescape.com/runemetrics/quests?user=${username}`;

  try {
    const data = await fetch(apiURL).then((res) => res.json());
    res.status(200).json(data); // send 200 and the data
  } catch (error) {
    console.log(`Get quests error...\n`);
    console.error(error); // if an error happens, log the error
    res.status(500).json({ message: 'Get quests failed, big R.I.P' }); // send status of 500
  }
});

export default questRouter;
