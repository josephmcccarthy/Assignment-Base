// These are our required libraries to make the server work.
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
// import express from 'express';
// import dotenv from 'dotenv';
// import fetch from 'node-fetch';
import express from 'express';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import path from 'path';
import { connect } from 'http2';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


app.route('/api')
  .get((req, res) => {
    console.log('GET request detected');
    res.send(`Lab 5 for ${process.env.NAME}`);
  })
  .post(async (req, res) => {
    console.log('POST request detected');
    console.log('Form data in res.body', req.body);

    const data = await fetch('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json');
    const json = await data.json();
    console.log('data from fetch', json);
    res.json(json);
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

/*
// These are our required libraries to make the server work.

import express from 'express';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import path from 'path';
import reload from 'livereload';
import connectReload from 'connect-livereload';
//import { connect } from 'http2';

dotenv.config();

const __dirname = path.resolve();
const app = express();
const port = process.env.PORT || 3000;
const staticFolder = 'public';

const liveReloadServer = reload.createServer();
liveReloadServer.watch(path.join(__dirname, staticFolder));

app.use(connectReload())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(staticFolder));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


app.route('/api')
  .get(async(req, res) => {
    console.log('GET request detected');
    const data = await fetch('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json');
    const json = await data.json();
    console.log('data from fetch', json[0])
    res.send(json);
  })
  .post(async (req, res) => {
    console.log('POST request detected');
    console.log('Form data in res.body', req.body);
    console.log('Now send something back to your client');
    const data = await fetch('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json');
    const json = await data.json();
   
    fetch('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json')
      .then((data) => data.json())
      .then((data2) => {
        //do something with data

      })
      .catch((err) => console.error(err));
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
}); 

*/