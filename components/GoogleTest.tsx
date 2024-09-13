import { getServerSession } from "next-auth";

const getUserSession = async () => {
  const authUserSession = await getServerSession();
  return authUserSession?.user;
};

export default async function GoogleTest() {
  const user = await getUserSession();
  return (
    <div>
      <h1>Google Test</h1>
      <main>{JSON.stringify(user)}</main>
    </div>
  );
}
