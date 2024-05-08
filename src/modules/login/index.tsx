export const LoginUser = () => {
    return (
        <div className="flex flex-col w-full min-h-screen md:bg-login bg-contain bg-no-repeat bg-bottom items-end justify-center">
            <div className="md:w-1/2 w-full h-screen p-10">
                <div className="flex flex-col justify-centers gap-y-4">
                    
                    <img src="src/images/logo.png" className="w-72 h-36 my-10 m-auto" alt="Descriptive alt text" />

                    <div className="flex flex-col gap-y-3">
                        <label>Ingresar el correo electronico que te envió tu institución a tu correo</label>
                        <input
                            className="w-full py-3 px-5 rounded-lg border"
                            placeholder="Correo electrónico"
                        />
                    </div>

                    <div className="flex flex-col gap-y-3">
                        <label>Ingresar la contraseña que te envió tu institución a tu correo</label>
                        <input
                            className="w-full py-3 px-5 rounded-lg border"
                            placeholder="Contraseña"
                        />
                    </div>

                    <button className="bg-blue-900 text-center rounded-lg w-full text-white py-4 px-5">
                        Ingresar a la página
                    </button>
                </div>
            </div>
        </div>
    )
}
