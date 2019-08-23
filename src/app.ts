import express from 'express';
import * as path from 'path';

const app = express();
const port = 3000;
app.get('/', (req, res) => {
  // res.send("The sedulous hyena ate the antelope!");
  res.sendFile(path.join(__dirname + '/src/html/index.html'));
});
app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});
