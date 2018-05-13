const express = require('express');
const env = require("./server/utils/env");

const app = express();
// const port = process.env.PORT || 9001;
const port = env.get("PORT") || 9002;

app.get('/api/firebase', (req, res) => {
  res.send({ firebase: '[TODO] integrate firebase' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
