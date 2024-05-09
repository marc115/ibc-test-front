import * as Yup from 'yup';
import { formikConstants } from '../../constants/formik-constants';

export interface FormValues {
    email: string
    password: string
}

export const initialValues: FormValues = {
    email: '',
    password: '',
}

export const formValidationSchema = Yup.object({
    email: Yup.string().email(formikConstants.emailErrorMessage).required(formikConstants.isRequiredMessage),
    password: Yup.string().min(5, formikConstants.passwordLengthMessage).required(formikConstants.isRequiredMessage)
})

