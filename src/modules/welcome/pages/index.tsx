import { PlatformLayout } from "@/components/layouts/PlatformLayout"
import { Button } from "@/components/ui/button"
import { useLoginStore } from "@/modules/login/store/login.store"
import { Link } from "react-router-dom"

export const WelcomePage = () => {
  const name = useLoginStore((state) => state.user?.names)

  return (
    <PlatformLayout>
      <div className="flex flex-col flex-grow">
        <div className="flex min-h-80 items-center justify-center bg-gradient-to-b from-slate-50 to-orange-200 m-6 rounded-lg shadow-md">
          <h1 className="heading bg-gradient-to-r from-slate-900 to-sky-500 bg-clip-text text-transparent">
            Welcome, {name}
          </h1>
        </div>

        <div className="p-6 text-lg paragraph">
          <p>Estás en la página principal de SPACETECHER, tu plataforma de estudio 
            que incorpora herramientas de última generación, incluida I.A (Inteligencia Artificial).
            En la parte izquierda de tu pantalla verás todas las pestañas que usarás para desarrollar tu programa de estudio, 
            cada pestaña cuenta con las herramientas que 
            necesitas para estudiar de manera óptima.
            Para conocer nuestra metodología de estudio y empezar a estudiar, dar clic en la pestaña "PROGRAMA" 
            que está en la parte izquierda de tu pantalla o dar clic en el boton "Ir a la guía de estudio" que está debajo de este mensaje.</p>
        </div>


        <div className="flex items-center justify-center">
          <Button><Link to={'../guide'}>Ir a la guía de estudio</Link></Button>
        </div>
      </div>
    </PlatformLayout>
  )
}
