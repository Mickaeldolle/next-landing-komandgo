import PushNotificationManager from "../PushNotificationManager";

export default async function admin() {
  return (
    <div className="px-4 h-full">
      <h1>Dashboard</h1>
      <PushNotificationManager />
    </div>
  );
}
