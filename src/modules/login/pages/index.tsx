import { z } from "zod"
import { formSchema, } from "../helpers/login-form-schema"
import { useLoginStore } from "../store/login.store";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Toaster } from "sonner";

export const LoginPage = () => {
    const login = useLoginStore((state) => state.login)
    const navigate = useNavigate();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        const result = await login(values.email, values.password);
        if (result) {
            navigate('/welcome')
        }
    };

    return (
        <div className="flex flex-col w-full min-h-screen md:bg-login bg-contain bg-no-repeat bg-bottom items-end justify-center">
            <div className="md:w-1/2 w-full h-screen p-10">
                <Form {...form}>
                    <img src="src/images/logo.png" className="w-72 h-36 my-10 m-auto" alt="Descriptive alt text" />
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Correo</FormLabel>
                                    <FormControl>
                                        <Input type="email" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Ingresar el correo electrónico que te envío tu institución a tu correo
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Contraseña</FormLabel>
                                    <FormControl>
                                        <Input type="password" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Ingresar la contraseña que te envió tu institución a tu correo
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button className="w-full" type="submit" disabled={form.formState.isSubmitting}>
                            Ingresar a la plataforma
                        </Button>
                    </form>
                </Form>
            </div>
            <Toaster />
        </div >
    )
}


