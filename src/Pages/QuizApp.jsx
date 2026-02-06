import { useState } from "react";


function QuizApp(){
    
    const questions = [
        {
            question: "Which language runs in browser?",
            options: ["PHP", "Java", "JavaScript", "Python"],
            answer: "JavaScript"
        },
         {
            question: "React is a ___ ?",
            options: ["Framework", "Library", "Language", "Database"],
            answer: "Library"
        },
        {
            question: "useState is a ___ ?",
            options: ["Hook", "API", "Library", "Component"],
            answer: "Hook"
        }
    ];

    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    // Handle answer click
    function handleAnswer (option){
        if(option == questions[current].answer){
            setScore(score + 1);
        }

        const next = current + 1;

        if(next < questions.length){
            setCurrent(next);
        }else{
            setShowResult(true);
        }
    }

    function handleGoBack(){
        setCurrent(0);
        setScore(0);
        setShowResult(false);
    }

    // Result Screen
    if(showResult){
         return (
            <div style={Styles.container}>
                <h2>Quiz Completed</h2>
                <h3>score: {score} / {questions.length}</h3>
                <button onClick={handleGoBack}>
                    Restart Quiz
                </button>
            </div>
        );
    }

    return (
        <div style={Styles.container}>
            <h2>Quiz App 🧠</h2>
            <h3>Q{current + 1}. {" "}
                {questions[current]. question}
                {/* {questions.sort(() => Math.random() - 0.5)} */}
                {questions[current]. options.map((option,index) => (
                    <button key={index} onClick={() => handleAnswer(option)} style={Styles.button}>
                        {option}
                    </button>
                ))}
            </h3>
        </div>
    );
   
}

const Styles = {
   container : {
    width: "400px",
    margin: "50px auto",
    textAlign: "center",
    fontFamily: "Arial"
   },
   button: {
    display: "block",
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    cursor: "pointer"
  }
}

export default QuizApp