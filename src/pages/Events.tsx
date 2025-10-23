import { useEffect, useState } from "react";
import { getEvents } from "../Services/EventService";
import EventCard from "../components/Eventcard";

type Event = {
  id: string;
  title: string;
  date: string;
  location: string;
  description?: string;
};

export default function Events() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEvents().then((data) => {
      setEvents(data);
      setLoading(false);
    });
  }, []);

  return (
    <section style={{ padding: "2rem" }}>
      <h2>Upcoming Events</h2>
      {loading ? (
        <p>Loading events...</p>
      ) : events.length === 0 ? (
        <p>No events found.</p>
      ) : (
        events.map((event) => (
          <EventCard
            key={event.id}
            title={event.title}
            date={event.date}
            location={event.location}
            description={event.description}
          />
        ))
      )}
    </section>
  );
}
