//import 
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const http = require('http').Server(app);


app.use(
    bodyParser.urlencoded({
      extended: true
    })
);
app.use(cors({origin: '*'}));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.json({ message: 'Hello World from employee service API! 🌈🌈' });
  });

http.listen(process.env.PORT, () =>
    console.log(`App listening on http://localhost:${process.env.PORT} ! 🚀🚀`)
);