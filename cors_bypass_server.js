const axios = require('axios');
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;
app.use(cors());

app.use(async (req, res, next) => {
    // console.log('Request Method:', req.method);
    // console.log('Request Headers:', req.headers);
    const url = req.headers['destination-url'];
    
  if (!url) {
    res.status(400).send('Bad Request: Missing destination-url header');
    return;
  }

  try {
    const response = await axios.get(url);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.status(response.status).send(response.data);
  } catch (error) {
    console.error('Error fetching data:', error.message);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.status(error.response ? error.response.status : 500).send(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server is started and running on http://localhost:${PORT}`);
});