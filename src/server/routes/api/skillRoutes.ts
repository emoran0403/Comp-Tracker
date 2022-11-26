import * as express from 'express';

const skillRouter = express.Router();

// Current route is /api/skills

// Get skills from RS API

skillRouter.get('/', async (req, res) => {
  const username = req.body.username;
  const apiURL: string = `https://secure.runescape.com/m=hiscore/index_lite.ws?player=${username}`;

  try {
    const data = await fetch(apiURL).then((res) => res.json());
    res.status(200).json(data); // send 200 and the data
  } catch (error) {
    console.log(`Get skills error...\n`);
    console.error(error); // if an error happens, log the error
    res.status(500).json({ message: 'Get skills failed, big R.I.P' }); // send status of 500
  }
});

export default skillRouter;
