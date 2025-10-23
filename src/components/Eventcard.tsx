import "./Eventcard.css";

type EventCardProps = {
  title: string;
  date: string;
  location: string;
  description?: string;
};

export default function EventCard({ title, date, location, description }: EventCardProps) {
  return (
    <div className="event-card">
      <h3>{title}</h3>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Location:</strong> {location}</p>
      {description && <p className="description">{description}</p>}
    </div>
  );
}
