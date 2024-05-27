import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useStateStore } from "@/state/state";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";

const LoginFormSchema = z.object({
  email: z.string().email({ message: "email must be valid" }),
  username: z.string().min(3).max(16),
});

type Props = {
  open: boolean;
};

export default function Login({ open }: Props) {
  const setUser = useStateStore((state) => state.setUser);

  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      username: "",
    },
  });

  useEffect(() => {
    const email = form.watch("email");
    if (!email || !email.match(new RegExp("@", "g"))) return;
    form.setValue("username", email.split("@")[0]);
  }, [form.watch("email")]);

  function onSubmit(values: z.infer<typeof LoginFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    setUser(values);
  }

  return (
    <AlertDialog open={open}>
      <AlertDialogContent className="pb-10 pt-4">
        <AlertDialogHeader>
          <AlertDialogTitle>Please Enter Your Detail</AlertDialogTitle>
          <AlertDialogDescription>
            Your data will only store in your browser not in server
          </AlertDialogDescription>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email*</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="riteshkhadka@jhapatype.com"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      This should be your valid email address
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="riteshreg" {...field} />
                    </FormControl>
                    <FormDescription>This is your username.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit">Save</Button>
            </form>
          </Form>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}
