import express from 'express';

import apiRouter from './router/api.mjs';

const app = express();

app.use(express.static('dist'));

app.use('/api', apiRouter);

app.listen(8080, () => console.log('Listening on port 8080!'));
