import type { ReactNode } from "react";
import "./DashboardLayout.css";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <h3>Event Handler Admin</h3>
        <ul>
          <li>📅 Events</li>
          <li>👥 Users</li>
          <li>📢 Notifications</li>
          <li>📊 Analytics</li>
        </ul>
      </aside>
      <main className="main-content">
        <header className="topbar">
          <p>Welcome, Admin</p>
        </header>
        <section className="content">{children}</section>
      </main>
    </div>
  );
}
