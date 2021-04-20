const {
  getAuthToken,
  getSpreadSheet,
} = require('./index.js');

const express = require('express');
const cors = require('cors');

const port = 4000
const allowedOrigin = 'http://localhost:4200';
const corsOptions = {
  origin: allowedOrigin,
}
const app = express();


const spreadsheetId = '126mdHuNyBiqFb4LiyrywVEYIBTQ8sYfu5iT3lDRysdA';

app.get('/', cors(corsOptions), async (req, res) => {
 
  try {
    const auth = await getAuthToken();
    const response = await getSpreadSheet({
      spreadsheetId,
      auth
    })
    res.send(JSON.stringify(response))
  } catch (err) {
    console.log('error', err)
  }
})

app.listen(port, (req, res) => {
  console.log(`server running on ${port}`)
})