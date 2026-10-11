import { trips } from "./tripsData";
import "./App.css";

function parseDate(value) {
  return new Date(value.length === 10 ? `${value}T14:00:00` : value);
}

function formatDate(value) {
  return parseDate(value).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function buildTimeline(trip) {
  const events = [
    ...trip.flights.map((f) => ({
      type: "Flight",
      date: f.departure,
      title: `${f.from} → ${f.to}`,
      detail: f.airline,
    })),
    ...trip.hotels.map((h) => ({
      type: "Hotel",
      date: h.checkIn,
      title: h.name,
      detail: `Check-out ${formatDate(h.checkOut)}`,
    })),
    ...trip.stays.map((s) => ({
      type: "Stay",
      date: s.checkIn,
      title: s.title,
      detail: `${s.platform} · check-out ${formatDate(s.checkOut)}`,
    })),
  ];

  return events.sort((a, b) => parseDate(a.date) - parseDate(b.date));
}

function App() {
  return (
    <main className="dashboard">
      <h1>Trip Dashboard</h1>
      <p className="subtitle">Flights, hotels and stays in one timeline</p>

      {trips.map((trip) => (
        <section key={trip.id} className="trip">
          <h2>{trip.destination}</h2>
          <p className="dates">
            {formatDate(trip.startDate)} – {formatDate(trip.endDate)}
          </p>

          <ul className="timeline">
            {buildTimeline(trip).map((event, index) => (
              <li key={index} className="event">
                <span className={`badge ${event.type.toLowerCase()}`}>
                  {event.type}
                </span>
                <div>
                  <strong>{event.title}</strong>
                  <div className="detail">{event.detail}</div>
                  <div className="when">{formatDate(event.date)}</div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}

export default App;
