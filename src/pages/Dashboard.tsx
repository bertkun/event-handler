import DashboardLayout from "../components/DashboardLayout";
import Notification from "../components/Notification";
import EventForm from "../components/EventForm";
import DashboardStats from "../components/DashboardStats";
import UserList from "../components/UserList";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <h2>Admin Dashboard</h2>

      <Notification type="success" message="Event created successfully!" />
      <Notification type="error" message="Failed to load user data." />
      <Notification message="You have 3 new submissions." />

      <DashboardStats />
      <EventForm />
      <UserList />
    </DashboardLayout>
  );
}
