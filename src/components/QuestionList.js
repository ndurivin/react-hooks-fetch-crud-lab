import React from "react";
import { useEffect } from "react";
import QuestionItem from "./QuestionItem"

function QuestionList({setQuestions, questions}) {

  function handleDelete(deleteQuestion) {
    const updateQuestions = questions.filter(
      (question) => question.id !== deleteQuestion.id
    );

    setQuestions(updateQuestions);
  }

useEffect(()=>{
fetch("http://localhost:4000/questions")
.then((res) => res.json())
.then((questions) => {
  setQuestions(questions)

});
}, []);
 
const allQuestions = questions.map((question)=>{
 return  <QuestionItem  key={question.id} question={question} onDelete={handleDelete} />

})
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{allQuestions}</ul>
    </section>
  );
}

export default QuestionList;