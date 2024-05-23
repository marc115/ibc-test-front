import { Link } from "react-router-dom"
import { Hero } from "@/components/custom/hero/hero"
import { Button } from "@/components/ui/button"
import { useLoginStore } from "@/modules/login/store/login.store"

export const WelcomePage = () => {
  const name = useLoginStore((state) => state.user?.names)

  return (
    <div className="p-6">
      <Hero text={`Welcome, ${name}`} />

      <p className="paragraph">Estás en la página principal de SPACETECHER, tu plataforma de estudio
        que incorpora herramientas de última generación, incluida I.A (Inteligencia Artificial).
        En el menú lateral verás todas las pestañas que usarás para desarrollar tu programa de estudio,
        cada pestaña cuenta con las herramientas que
        necesitas para estudiar de manera óptima.
        Para conocer nuestra metodología de estudio y empezar a estudiar, dar clic en la pestaña "PROGRAMA"
        que está en el menú lateral o dar clic en el boton "Ir a la guía de estudio" que está debajo de este mensaje.
      </p>

      <div className="flex items-center justify-center mt-6">
        <Button><Link to={'../guide'}>Ir a la guía de estudio</Link></Button>
      </div>
    </div>
  )
}
