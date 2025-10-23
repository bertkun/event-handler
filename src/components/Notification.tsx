import "./Notification.css";

type NotificationProps = {
  message: string;
  type?: "success" | "error" | "info";
};

export default function Notification({ message, type = "info" }: NotificationProps) {
  return (
    <div className={`notification ${type}`}>
      {message}
    </div>
  );
}
