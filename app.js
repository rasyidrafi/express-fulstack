require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ msg: 'ok' });
});

const { PORT } = process.env;
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
