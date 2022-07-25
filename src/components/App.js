import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);
  
  function addNewQuestions(newQuestion){
    const newQuiz =  [...questions, newQuestion]
    setQuestions(newQuiz)
   
   }
   

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm  onAddQuestion={addNewQuestions}/> : <QuestionList setQuestions={setQuestions} questions={questions} />}
    </main>
  );
}

export default App;