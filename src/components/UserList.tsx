import "./UserList.css";

type User = {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user";
};

const mockUsers: User[] = [
  { id: "u1", name: "Albert", email: "albert@ukumba.com", role: "admin" },
  { id: "u2", name: "Chanda", email: "chanda@example.com", role: "user" },
  { id: "u3", name: "Mwansa", email: "mwansa@example.com", role: "user" },
];

export default function UserList() {
  return (
    <div className="user-list">
      <h3>Registered Users</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {mockUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
