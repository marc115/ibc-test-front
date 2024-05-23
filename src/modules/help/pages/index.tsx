import { MessagesSquare } from "lucide-react"
import { QuestionItem } from "../components/question-item"
import { frequentQuestions } from "@/constants/faq"

export const HelpPage = () => {
  const questions = frequentQuestions;
  return (
    <div className="p-8">
        <h1 className="title flex flex-row items-center"><MessagesSquare className="mr-2" />Preguntas Frecuentes</h1>
        {
          questions.map((item, index) => (
            <QuestionItem key={index} {...item} questionNumber={index + 1} />
          ))
        }
    </div>
  )
}
