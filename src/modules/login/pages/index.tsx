import { Field, Form, Formik, ErrorMessage } from "formik"
import { FormValues, formValidationSchema, initialValues } from "../loginFormSchema"
import { formikConstants } from "../../../constants/formik-constants"
import { useLoginStore } from "../store/login.store";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
    const login = useLoginStore((state) => state.login)
    const navigate = useNavigate();

    const onSubmit = async (values: FormValues) => {
        const result = await login(values.email, values.password);
        if (result) {
            navigate('/dashboard')
        }
    };

    return (
        <div className="flex flex-col w-full min-h-screen md:bg-login bg-contain bg-no-repeat bg-bottom items-end justify-center">
            <div className="md:w-1/2 w-full h-screen p-10">
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={formValidationSchema}>
                    {({ isSubmitting }) => (
                        <Form>
                            <div className="flex flex-col justify-centers gap-y-4">

                                <img src="src/images/logo.png" className="w-72 h-36 my-10 m-auto" alt="Descriptive alt text" />

                                <div className="flex flex-col gap-y-3">
                                    <label>Ingresar el correo electronico que te envió tu institución a tu correo</label>
                                    <div className="flex flex-col gap-y-1">
                                        <Field
                                            name="email"
                                            className="w-full py-3 px-5 rounded-lg border"
                                            placeholder="Correo electrónico"
                                        />
                                        <ErrorMessage
                                            name="email"
                                            className={formikConstants.errorMessageStyles}
                                            component="span"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-y-3">
                                    <label>Ingresar la contraseña que te envió tu institución a tu correo</label>
                                    <div className="flex flex-col gap-y-1">
                                        <Field
                                            name="password"
                                            type="password"
                                            className="w-full py-3 px-5 rounded-lg border"
                                            placeholder="Correo electrónico"
                                        />
                                        <ErrorMessage
                                            name="password"
                                            className={formikConstants.errorMessageStyles}
                                            component="span"
                                        />
                                    </div>
                                </div>

                                <button type="submit" className="bg-blue-900 text-center rounded-lg w-full text-white py-4 px-5
                                disabled:bg-blue-300"
                                disabled={isSubmitting}
                                >
                                    Ingresar a la página
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}
