import CreatePassword from "@/components/CreatePassword";
import { getServerSession } from "next-auth";
import { PrismaClient as PrismaClient2 } from "@/prisma/generated/client2";
const prisma2 = new PrismaClient2();
import Link from "next/link";
// import PhoneInput from "./phoneInput";

export default async function StepForFirstConnexion() {
  const session = await getServerSession();
  let user;
  if (session?.user?.email) {
    const email = session.user.email;
    user = await prisma2.user.findUnique({
      where: { email: email },
    });
  }
  return (
    <>
      {!user?.password && !user?.phone && <CreatePassword user={user} />}
      {/* <CreatePassword user={user} /> */}
      <div className="md:w-3/5 mx-auto">
        <div className="text-3xl font-bold border w-10 mx-auto rounded-full text-white bg-[#161b2f] mb-2">
          1
        </div>
        <p className="">
          Pour utiliser votre compte, il vous fait maintenant vous rendre sur
          l&apos;application en cliquant{" "}
          <Link
            href="https://app.komandgo.fr/office"
            className="text-blue-600 font-bold underline text-lg"
            target="_blank"
          >
            ici{" "}
          </Link>
        </p>
        <div className="text-center my-5">
          <div className="text-3xl font-bold border w-10 mx-auto rounded-full text-white bg-[#161b2f] mb-2">
            2
          </div>
          <p className="flex flex-col text-gray-600">
            Créez votre point de vente
          </p>
        </div>
        <div className="text-center my-5">
          <div className="text-3xl font-bold border w-10 mx-auto rounded-full text-white bg-[#161b2f] mb-2">
            3
          </div>
          <p className="flex flex-col text-gray-600">
            Ajoutez vos produits dans la section &quot;administration du point
            de vente&quot;
          </p>
        </div>
        <div className="text-center my-5">
          <p className="flex flex-col text-gray-600">
            Un lien vous sera transmis par mail. Vous pourrez ensuite
            l&apos;afficher sur vos réseaux sociaux, votre site internet, votre
            profil google business, etc...
          </p>
        </div>
        <p className="text-center my-5">
          Vos clients auront accès à vos produits via ce lien !
        </p>
      </div>
    </>
  );
}
