"use client";

import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { User } from "@/prisma/generated/client2";

const regexPhone = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

const formSchema = z.object({
  phone: z.string().regex(regexPhone, {
    message: "",
  }),
});

interface PhoneInputProps {
  user: User | null | undefined; // car l'utilisateur peut être null
}

export default function PhoneInput({ user }: PhoneInputProps) {
  console.log(user);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "",
    },
  });

  return (
    <>
      {}
      <Form {...form}>
        <form className="md:w-2/5 md:mx-auto shadow-xl rounded-xl border p-4 my-5">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>N° de téléphone</FormLabel>
                <FormControl>
                  <Input {...field} type="tel" />
                </FormControl>
              </FormItem>
            )}
          />
          <Button className="w-full" type="submit">
            Valider
          </Button>
        </form>
      </Form>
    </>
  );
}
