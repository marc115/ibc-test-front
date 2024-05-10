import { z } from "zod"
import {formConstants} from '../../constants/form-constants'

export const formSchema = z.object({
  email: z.string().email(formConstants.emailErrorMessage),
  password: z.string().min(5, formConstants.passwordLengthMessage)
})
