const express = require('express');
const { fork } = require('child_process');

const app = express();



app.get('/three', (req, res) => {
  const child = fork('./index.js');
  child.send('run');
  child.on('message', (guessNumber) => {
    console.log(guessNumber);
    res.send({ guessNumber: guessNumber });
  });
});

app.listen(3000, () => console.log('server on port 3000...'));
