import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getEvents } from "../Services/EventService";

type Event = {
  id: string;
  title: string;
  date: string;
  location: string;
  description?: string;
};

export default function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEvents().then((events) => {
      const found = events.find((e) => e.id === id);
      setEvent(found || null);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <p style={{ padding: "2rem" }}>Loading event...</p>;
  if (!event) return <p style={{ padding: "2rem" }}>Event not found.</p>;

  return (
    <section style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h2>{event.title}</h2>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Location:</strong> {event.location}</p>
      {event.description && <p>{event.description}</p>}
    </section>
  );
}
