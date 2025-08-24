const fs = require('fs');
const path = require('path');
const csv = require('csv-parser'); // npm install csv-parser

const results = [];

fs.createReadStream(path.join(__dirname, 'airports.dat'))
  .pipe(csv({ headers: false })) // no header row
  .on('data', (data) => {
    const icao = data[5];
    const city = data[2];
    const name = data[1];

    // Only include airports with ICAO code
    if (icao && icao !== "\\N") {
      results.push({ city, name, icao });
    }
  })
  .on('end', () => {
    fs.writeFileSync('airports.json', JSON.stringify(results, null, 2));
    console.log('airports.json created!');
  });
