require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const airports = require('./airports.json');

const app = express();
app.use(cors());
app.use(express.static('public')); // serve frontend

// Route: Get airports by city
app.get('/api/airports', (req, res) => {
  const city = req.query.city?.toLowerCase();
  if (!city) return res.json([]);
  const filtered = airports.filter(a => a.city.toLowerCase().includes(city));
  res.json(filtered);
});

// Route: Get flight data
app.get('/api/flights', async (req, res) => {
  const { airport, type } = req.query;
  if (!airport) return res.status(400).json([]);

  // Use ICAO parameter depending on type
  const flightParam = type === 'departure' ? 'dep_icao' : 'arr_icao';
  const url = `http://api.aviationstack.com/v1/flights?access_key=${process.env.AVIATIONSTACK_KEY}&${flightParam}=${airport}&limit=100`;

  try {
    const response = await axios.get(url);
    const data = response.data.data || [];
    res.json(data);
  } catch (err) {
    console.error(err.message);
    res.json([]);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
