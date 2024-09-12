import SignupForm from "./SigupForm";
import { Cta } from "./ui/cta";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function CallToAction() {
  // const [openForm, setOpenForm] = useState(false);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Cta
          variant={"cta"}
          size={"lg"}
          className="uppercase font-bold mb-10 md:text-xl md:p-7"
        >
          Tester gratuitement
        </Cta>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle>Connexion</DialogTitle>
          <DialogDescription>
            Créez votre compte et commencez à automatiser la prise de commande.
          </DialogDescription>
        </DialogHeader>
        <SignupForm />
      </DialogContent>
    </Dialog>
  );
}
