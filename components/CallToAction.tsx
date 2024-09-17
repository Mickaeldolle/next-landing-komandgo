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
          variant="cta"
          size="lg"
          className="group uppercase font-bold mb-10 md:text-xl md:p-7 rounded-full hover:scale-105"
        >
          Tester gratuitement
        </Cta>
      </DialogTrigger>
      <DialogContent className="max-w-[90%] md:w-auto bg-white rounded-md">
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
