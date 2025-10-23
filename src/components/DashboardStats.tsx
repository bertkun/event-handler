import "./DashboardStats.css";

type Stat = {
  label: string;
  value: number;
};

const stats: Stat[] = [
  { label: "Total Events", value: 12 },
  { label: "Active Users", value: 87 },
  { label: "Submissions", value: 34 },
];

export default function DashboardStats() {
  return (
    <div className="dashboard-stats">
      {stats.map((stat) => (
        <div key={stat.label} className="stat-card">
          <h4>{stat.label}</h4>
          <p>{stat.value}</p>
        </div>
      ))}
    </div>
  );
}
