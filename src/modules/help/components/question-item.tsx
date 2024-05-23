interface Props {
  questionNumber: number
  question: string,
  answer: string
}

export const QuestionItem = ({ questionNumber, question, answer }: Props) => {
  return (
    <div className="flex flex-row w-full items-center justify-start gap-x-5 py-6 border-b-4 border-dashed last:border-none">
      <div className="flex items-center justify-center min-w-16 min-h-16 bg-orange-300 text-white rounded-full text-xl">
        {questionNumber}
      </div>


      <div className="flex-grow">
        <h1 className="subtitle">{question}</h1>
        <p className="paragraph">{answer}</p>
      </div>
    </div>
  )
}
