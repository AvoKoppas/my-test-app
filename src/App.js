import './App.css';
import {useState} from "react";

function App() {
    const questions = [
        {
            questionText: 'Mis on Eesti pindala?',
            answerOptions: [
                {answerText: 12000, isCorrect: false},
                {answerText: 34500, isCorrect: false},
                {answerText: 44500, isCorrect: true},
                {answerText: 51000, isCorrect: false}
            ],
        },
        {
            questionText: 'Mis on Eesti pealinn?',
            answerOptions: [
                {answerText: 'Tallinn', isCorrect: true},
                {answerText: 'Narva', isCorrect: false},
                {answerText: 'Tartu', isCorrect: false},
                {answerText: 'Pärnu', isCorrect: false}
            ]
        }
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [showScore, setShowScore] = useState(false)

    const handleAnswerButtonClick = (isCorrect) => {
        if (isCorrect === true) {
            setScore(score + 1)
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion)
        } else {
            setShowScore(true);
        }
    }

    return (<div className="app">
            {showScore ? (<div className="score-section">Sa
                skoorisid {score} punkti {questions.length}-st </div>) : (
                <>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>Küsimus nr {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <div
                            className='question-text'>{questions[currentQuestion].questionText}</div>
                    </div>
                    <div className='answer-section'>
                        {questions[currentQuestion].answerOptions.map((answerOption) =>
                            <button
                                onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>)}
                    </div>
                </>
            )}
        </div>
    )
        ;
}

export default App;
