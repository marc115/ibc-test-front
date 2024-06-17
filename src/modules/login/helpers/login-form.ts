import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { NavigateFunction } from "react-router-dom"

import { formConstants } from '../../../constants/form-constants'
import { useLoginStore } from "../store/login.store"

const formSchema = z.object({
  email: z.string().email(formConstants.emailErrorMessage),
  password: z.string().min(5, formConstants.passwordLengthMessage)
})

export const useLoginForm = () => (
  useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })
)

export const onLoginFormSubmit = (navigate: NavigateFunction) => (
  async (values: z.infer<typeof formSchema>) => {
    const login = useLoginStore.getState().login
    const result = await login(values.email, values.password);
    if (result) {
      navigate('/welcome')
    }
  }
)