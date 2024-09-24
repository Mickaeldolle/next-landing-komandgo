import NavBar from "@/components/NavBar";
import StepForFirstConnexion from "./StepForFirstConnexion";
import { getServerSession } from "next-auth";
import Footer from "@/components/Footer";

export default async function Welcome() {
  const session = await getServerSession();
  return (
    <>
      <NavBar session={session} />
      <div className="px-4 md:border-l md:border-r md:w-3/5 md:mx-auto">
        <h1 className="text-2xl font-bold text-center my-5">
          Merci pour votre inscription !
        </h1>
        <p className="text-center font-medium">
          Vous avez désormais &quot;pré-inscrit&quot; votre compte
          professionelle.
        </p>
        {/* {user && ( */}
        <div className="text-center my-5 text-gray-600">
          <StepForFirstConnexion />
        </div>
        {/* )} */}
      </div>
      <Footer />
    </>
  );
}
