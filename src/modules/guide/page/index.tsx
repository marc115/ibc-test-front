import { PlatformLayout } from "@/components/layouts/PlatformLayout"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
export const GuidePage = () => {
  return (
    <PlatformLayout>
      <div className="flex flex-col p-8 h-lvh ">
        <object data="/src/assets/ibc+024.pdf" type="application/pdf" width="100%" height="100%">
          <p>Alternative text - include a link <a href="https://textbookequity.org/Textbooks/HowtoReadABook.pdf">to the PDF!</a></p>
        </object>
        <div className="flex items-center justify-center my-8">
          <Button><Link to={'../program'}>Ir al programa de estudio</Link></Button>
        </div>
      </div>
    </PlatformLayout>
  )
}
