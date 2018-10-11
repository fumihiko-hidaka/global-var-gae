const express = require('express');
const app = express();

let count = 0;

app.get('/*', (req, res) => {
  count++;
  res.status(200).send(`count: ${count}`).end();
});

app.listen(process.env.PORT || 8080);
