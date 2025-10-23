type Event = {
  id: string;
  title: string;
  date: string;
  location: string;
  description?: string;
};

// Local mock data (used when no remote API is configured)
let mockEvents: Event[] = [
  {
    id: "1",
    title: "Event Handler Launch",
    date: "2025-11-05",
    location: "Innovation Hub",
    description: "Join us for the official launch of Event Handler platform.",
  },
  {
    id: "2",
    title: "Tech Meetup",
    date: "2025-11-12",
    location: "Tech Space",
    description: "Network with local developers and tech enthusiasts.",
  },
];

// If you want to point this app to a real backend, set VITE_API_URL in your .env (e.g. VITE_API_URL=http://localhost:4000)
const API_BASE = (import.meta.env.VITE_API_URL as string) || "";
const hasRemote = Boolean(API_BASE);

async function fetcher<T>(path: string, opts: RequestInit = {}): Promise<T> {
  const base = API_BASE.replace(/\/$/, "");
  const url = path.startsWith("/") ? `${base}${path}` : `${base}/${path}`;
  const res = await fetch(url, {
    headers: { "Content-Type": "application/json" },
    ...opts,
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`API request failed (${res.status}): ${text}`);
  }
  // Accept empty responses for endpoints that return no body
  const contentType = res.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) return (undefined as unknown) as T;
  return (await res.json()) as T;
}

export async function getEvents(): Promise<Event[]> {
  if (hasRemote) {
    return fetcher<Event[]>("/events");
  }
  return new Promise((resolve) => setTimeout(() => resolve(mockEvents), 500));
}

export async function getEvent(id: string): Promise<Event | null> {
  if (hasRemote) {
    try {
      return await fetcher<Event>(`/events/${id}`);
    } catch {
      return null;
    }
  }
  return new Promise((resolve) =>
    setTimeout(() => resolve(mockEvents.find((e) => e.id === id) || null), 250)
  );
}

export async function createEvent(event: Omit<Event, "id">): Promise<Event> {
  if (hasRemote) {
    return fetcher<Event>("/events", {
      method: "POST",
      body: JSON.stringify(event),
    });
  }
  const created: Event = { ...event, id: String(Date.now()) } as Event;
  mockEvents.push(created);
  await new Promise((r) => setTimeout(r, 500));
  return created;
}

export async function deleteEvent(id: string): Promise<void> {
  if (hasRemote) {
    await fetcher<void>(`/events/${id}`, { method: "DELETE" });
    return;
  }
  mockEvents = mockEvents.filter((e) => e.id !== id);
  await new Promise((r) => setTimeout(r, 250));
}
