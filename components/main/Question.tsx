"use client"

import Image from "next/image"
import { useState } from "react"

type Question = {
  id: string
  question: string
  answer: string
}

const Question = () => {
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: "1",
      question:
        "現在居住中です。売却が決まるとすぐに引っ越さなければなりませんか？",
      answer:
        "いいえ。お引渡の日については、お客様のご都合に合わせ調整いたします。",
    },
    {
      id: "2",
      question: "古い建物が建っています。そのままの状態で売却できますか？",
      answer:
        "回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。",
    },
    {
      id: "3",
      question: "遠方に住んでおり、何度も足を運ぶことができないのですが…",
      answer:
        "回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。",
    },
    {
      id: "4",
      question: "査定を依頼すると必ず売らなければなりませんか？",
      answer:
        "回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。",
    },
    {
      id: "5",
      question: "買取可能なエリアは？",
      answer:
        "回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。",
    },
    {
      id: "6",
      question: "どのような物件が買取の対象となりますか？",
      answer:
        "回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。",
    },
  ])
  const [openQuestionId, setOpenQuestionId] = useState<string | null>(null)

  const toggleQuestion = (id: string) => {
    setOpenQuestionId(openQuestionId === id ? null : id)
  }

  return (
    <div className="px-3 max-w-screen-xl mx-auto py-20">
      <div className="text-primary text-xl mb-3">よくある質問</div>

      <div className="font-bold text-2xl mb-10">
        気になるあれこれ。
        <br />
        お答えします。
      </div>

      {questions.length > 0 ? (
        <>
          {questions.map((question) => (
            <div
              key={question.id}
              className="bg-secondary p-5 mb-3 rounded cursor-pointer"
            >
              <div
                className="flex items-center justify-between"
                onClick={() => toggleQuestion(question.id)}
              >
                <div className="flex items-center space-x-2">
                  <Image
                    src="/question/icon-question.svg"
                    alt="よくある質問の質問のイラスト"
                    width="24"
                    height="24"
                    className="w-6 h-6"
                  />
                  <div
                    className=""
                    dangerouslySetInnerHTML={{
                      __html: question.question,
                    }}
                  ></div>
                </div>
                <Image
                  src={
                    openQuestionId === question.id
                      ? "/question/icon-minus.svg"
                      : "/question/icon-plus.svg"
                  }
                  alt={
                    openQuestionId === question.id
                      ? "マイナスマーク"
                      : "プラスマーク"
                  }
                  width="24"
                  height="24"
                  className="w-4 h-4"
                />
              </div>

              {openQuestionId === question.id && (
                <div className="flex items-center space-x-2 mt-5">
                  <Image
                    src="/question/icon-answer.svg"
                    alt="よくある質問の答えのイラスト"
                    width="24"
                    height="24"
                    className="w-6 h-6"
                  />
                  <div
                    className=""
                    dangerouslySetInnerHTML={{ __html: question.answer }}
                  ></div>
                </div>
              )}
            </div>
          ))}
        </>
      ) : (
        <div>データがありません</div>
      )}
    </div>
  )
}

export default Question
