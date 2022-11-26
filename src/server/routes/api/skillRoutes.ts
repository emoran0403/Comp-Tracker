import * as express from 'express';

const skillRouter = express.Router();

// Current route is /api/skills

// Get skills from RS API

skillRouter.get('/', async (req, res) => {
  try {
    // const data = await db.Blogs.readAllBlogs(); // Read all Blogs
    // res.status(200).json(data); // send 200 and the data
  } catch (error) {
    // if (error.sqlMessage) {
    //   console.log(`\n${error.sqlMessage}\n`); // log the sql error if there is one
    // }
    // console.log(`Get All Blogs error...\n`);
    // console.error(error); // if an error happens, log the error
    // res.status(500).json({ message: 'Get All Blogs failed, big R.I.P' }); // send status of 500
  }
});

export default skillRouter;
