import useItem from "/src/app/hooks/useItem";
import { useState } from "react";
import { CgTrash } from "react-icons/cg";
import { IoMdAddCircle } from "react-icons/io";
import { useActionData } from "react-router-dom";
import FieldError from "./FieldError";
import { FormErrorsContext } from "/src/app/utilities/contexts";

export default function FormAdditionalQuestions() {
  const service = useItem();
  const initialQuestions = service ? service.additional_questions : [];
  const [questions, setQuestions] = useState(initialQuestions);
  const initialQuestionIndex =
    questions.length > 0 ? questions.at(-1).id + 1 : 0;
  const [questionIndex, setQuestionIndex] = useState(initialQuestionIndex);

  function addQuestion() {
    const newQuestion = {
      id: questionIndex,
      text: "",
      type: "text",
    };
    setQuestionIndex(questionIndex + 1);
    setQuestions([...questions, newQuestion]);
  }

  function deleteQuestion({ question_id }) {
    const newQuestions = questions.filter(
      (question) => question.id !== question_id
    );
    setQuestions(newQuestions);
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        {questions.map((question) => (
          <AdditionalQuestion
            question={question}
            key={question.id}
            deleteQuestion={deleteQuestion}
          />
        ))}
      </div>
      <button
        onClick={addQuestion}
        className="flex w-full justify-center"
        type="button"
      >
        <IoMdAddCircle className="size-9 rounded-md text-primary-600" />
      </button>
    </div>
  );
}

function AdditionalQuestion({ question, deleteQuestion }) {
  const errorDict = useActionData();
  const questionError = errorDict?.additional_questions[question.id];

  return (
    <div className="w-full">
      <div className="flex flex-row gap-3 items-center">
        <input
          defaultValue={question.id}
          name={`additional-question-id-${question.id}`}
          className="hidden"
        />
        <input
          type="text"
          placeholder="Pregunta"
          name={`additional-question-${question.id}-text`}
          defaultValue={question.text}
          required
        />
        <button
          type="button"
          onClick={() => deleteQuestion({ question_id: question.id })}
        >
          <CgTrash className="bg-red-600 size-9 p-1 rounded-md text-white" />
        </button>
      </div>
      <FormErrorsContext.Provider value={questionError}>
        <FieldError name="text" />
      </FormErrorsContext.Provider>
    </div>
  );
}
