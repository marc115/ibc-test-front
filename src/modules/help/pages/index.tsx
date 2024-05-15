import { PlatformLayout } from "@/components/layouts/PlatformLayout"
import {MessagesSquare } from "lucide-react"

export const HelpPage = () => {
  return (
    <PlatformLayout>
      <div className="flex flex-col p-8">
        <div className="text-blue-500">
          <h1 className="title flex flex-row items-center gap-x-3"><MessagesSquare /> Preguntas Frecuentes</h1>
        </div>
      </div>
    </PlatformLayout>
  )
}
