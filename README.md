# Flight Tracker

A simple web application to track **real-time flight arrivals and departures** at airports. Users can search for a city, select an airport, and view live flight data including flight number, airline, departure, and arrival information.  

---

## Features

- Search airports by **city name**.
- Select an airport from a **dropdown list**.
- Filter flights by **arrival or departure**.
- Filter flights by **date**.
- View flight details including:
  - Flight number
  - Airline
  - Departure and arrival airport
  - Flight status (scheduled, active, landed, cancelled, etc.)

---

## Demo

*(Add a screenshot of your website here)*  
`![Demo Screenshot](screenshot.png)`

---

## Technologies Used

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express
- API: [Aviationstack API](https://aviationstack.com/)
- Airports data: `airports.json`
- HTTP requests: `fetch` (frontend) / `axios` (backend)

---

## Installation

1. **Clone the repository:**

```bash
git clone https://github.com/suryanshk0920/flight_tracker.git
cd flight_tracker
```

2. **Install dependencies:**

```bash
npm install
```

3. **Create a `.env` file** in the root directory:

```env
AVIATIONSTACK_KEY=YOUR_API_KEY_HERE
PORT=3000
```

4. **Run the server:**

```bash
node server.js
```

5. **Open the app** in your browser:

```
http://localhost:3000
```

---

## How to Create an API Key

1. Go to [Aviationstack](https://aviationstack.com/).
2. Sign up for a free account.
3. Go to your **Dashboard** and copy the **API Access Key**.
4. Paste this key into the `.env` file:

```env
AVIATIONSTACK_KEY=YOUR_API_KEY_HERE
```

---

## Workflow of the Website

1. **User searches for a city**:  
   The app filters airports in `airports.json` that match the city.

2. **User selects an airport**:  
   A dropdown list shows airports in the searched city.  

3. **User selects type and date**:  
   - Arrival or Departure  
   - Optional flight date filter  

4. **Fetch flight data**:  
   The frontend sends a request to the backend API route `/api/flights` with the selected airport, type, and date.  

5. **Display flight data**:  
   Backend calls **Aviationstack API**, retrieves flights, and sends the data back to frontend.  
   The frontend displays flights in a table with columns:
   - Flight Number
   - Airline
   - Departure Airport
   - Arrival Airport
   - Flight Status

---

## Example API Request

```javascript
const url = `https://api.aviationstack.com/v1/flights?access_key=${process.env.AVIATIONSTACK_KEY}&dep_iata=SFO&flight_status=active`;

const response = await fetch(url);
const result = await response.json();
console.log(result);
```

---

## Contributing

1. Fork the repository.
2. Create a new branch:

```bash
git checkout -b feature/new-feature
```

3. Commit your changes:

```bash
git commit -m "Add new feature"
```

4. Push to your branch:

```bash
git push origin feature/new-feature
```

5. Open a Pull Request.

---

## License

This project is open-source under the MIT License.

