export const trips = [
  {
    id: 1,
    destination: "Kampala, Uganda",
    startDate: "2026-11-02",
    endDate: "2026-11-09",
    flights: [
      {
        airline: "Kenya Airways",
        from: "JFK",
        to: "EBB",
        departure: "2026-11-02T18:30",
        arrival: "2026-11-03T14:10",
      },
    ],
    hotels: [
      {
        name: "Kampala Serena Hotel",
        checkIn: "2026-11-03",
        checkOut: "2026-11-06",
      },
    ],
    stays: [
      {
        platform: "Airbnb",
        title: "Lakeview Cottage, Entebbe",
        checkIn: "2026-11-06",
        checkOut: "2026-11-09",
      },
    ],
  },
  {
    id: 2,
    destination: "Cape Town, South Africa",
    startDate: "2027-01-15",
    endDate: "2027-01-22",
    flights: [
      {
        airline: "Emirates",
        from: "EBB",
        to: "CPT",
        departure: "2027-01-15T09:00",
        arrival: "2027-01-15T22:45",
      },
    ],
    hotels: [
      {
        name: "Table Bay Hotel",
        checkIn: "2027-01-15",
        checkOut: "2027-01-19",
      },
    ],
    stays: [
      {
        platform: "Airbnb",
        title: "Modern Loft, Camps Bay",
        checkIn: "2027-01-19",
        checkOut: "2027-01-22",
      },
    ],
  },
];
