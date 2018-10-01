import express from 'express';
import os from 'os';

const router = express.Router();

router.get('/', (request, response) => {
  response.end('Api not found');
});

router.get('/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

export default router;
