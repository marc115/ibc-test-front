import * as Yup from 'yup';
import { formikConstants } from '../../constants/formik-constants';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import { useNavigate } from 'react-router-dom';

interface FormValues {
    email: string
    password: string
}

export const initialValues: FormValues = {
    email: '',
    password: ''
}

export const onSubmit = async(values: FormValues) => {
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();

    const result = await login(values.email, values.password);

    if(result) {
        navigate('/dashboard')
    }
};

export const formValidationSchema = Yup.object({
    email: Yup.string().email(formikConstants.emailErrorMessage).required(formikConstants.isRequiredMessage),
    password: Yup.string().min(5, formikConstants.passwordLengthMessage).required(formikConstants.isRequiredMessage)
})

