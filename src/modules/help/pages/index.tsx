import {MessagesSquare } from "lucide-react"
import { PlatformLayout } from "@/components/layouts/PlatformLayout"

export const HelpPage = () => {
  return (
    <PlatformLayout>
      <div className="flex flex-col p-8">
        <div className="text-blue-500">
          <h1 className="title"><MessagesSquare /> Preguntas Frecuentes</h1>
        </div>
      </div>
    </PlatformLayout>
  )
}
