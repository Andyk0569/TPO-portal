import React, { useState, useEffect } from 'react';
import { FiClock, FiCheckCircle, FiXCircle, FiAlertTriangle, FiBook, FiCpu, FiSettings, FiZap } from 'react-icons/fi';
import HighlightText from '../HomePage/HighlightText';
const TestModule = () => {
    // State management
    const [departments] = useState(['Computer Science', 'Electrical', 'Mechanical', 'Civil']);
    const [selectedDept, setSelectedDept] = useState(null);
    const [availableTests, setAvailableTests] = useState([]);
    const [selectedTest, setSelectedTest] = useState(null);
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
    const [testStarted, setTestStarted] = useState(false);

    // Department to test mapping
    const departmentTests = {
        'Computer Science': ['Data Structures', 'Algorithms', 'DBMS', 'OS'],
        'Electrical': ['Circuit Theory', 'Power Systems', 'EM Theory'],
        'Mechanical': ['Thermodynamics', 'Fluid Mechanics', 'Solid Mechanics'],
        'Civil': ['Structural Analysis', 'Geotechnical', 'Transportation']
    };

    // Fetch questions when test is selected
    useEffect(() => {
        if (selectedTest) {
          const fetchQuestions = async () => {
                try {
                    const response = await fetch(
                        `https://opentdb.com/api.php?amount=10&category=${getCategoryId(selectedTest)}&type=multiple`
                    );
                    const data = await response.json();
                    setQuestions(data.results.map(formatQuestion));
                } catch (error) {
                    console.error("Error fetching questions:", error);
                }
            };
            fetchQuestions();
        }
    }, [selectedTest]);

    // Timer logic
    useEffect(() => {
        let timer;
        if (testStarted && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft(prev => prev - 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [testStarted, timeLeft]);

    // Helper functions
    const formatQuestion = (q) => ({
        question: q.question,
        options: shuffle([...q.incorrect_answers, q.correct_answer]),
        correctAnswer: q.correct_answer
    });

    const getCategoryId = (test) => {
        const categories = {
            'Data Structures': 18,
            'Algorithms': 18,
            'Circuit Theory': 17,
            'Thermodynamics': 17
        };
        return categories[test] || 9;
    };

    const handleStartTest = () => {
        setTestStarted(true);
        setTimeLeft(600);
        setCurrentQuestion(0);
        setScore(0);
    };

    const handleAnswer = (selected) => {
        if (selected === questions[currentQuestion].correctAnswer) {
            setScore(prev => prev + 10);
        }
        setCurrentQuestion(prev => prev + 1);
    };

    const departmentIcons = {
      'Computer Science': <FiCpu className="w-8 h-8 mb-2" />,
      'Electrical': <FiZap className="w-8 h-8 mb-2" />,
      'Mechanical': <FiSettings className="w-8 h-8 mb-2" />,
      'Civil': <FiBook className="w-8 h-8 mb-2" />
  };

  // Test category colors
  const testColors = {
      'Computer Science': 'richblack-500 to-indigo-500',
      'Electrical': 'from-blue-500 to-cyan-500',
      'Mechanical': 'from-orange-500 to-amber-500',
      'Civil': 'from-emerald-500 to-teal-500'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-gray-100 text-richblack-5">
        <div className="max-w-6xl mx-auto">
            {/* Department Selection */}
            {!selectedDept && (
                <div className="text-center">
                    <h1 className="text-5xl  font-bold mb-12 bg-gradient-to-r from-cyan-400  bg-clip-text text-transparent animate-gradient">
                         <HighlightText text={"Choose Your Department"} /> 
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {departments.map(dept => (
                            <button
                                key={dept}
                                onClick={() => {
                                    setSelectedDept(dept);
                                    setAvailableTests(departmentTests[dept]);
                                }}
                                className={`p-8 rounded-2xl backdrop-blur-lg bg-gray-800/50 hover:bg-gray-700/60 transition-all 
                                    transform hover:scale-105 hover:shadow-xl flex flex-col items-center
                                    border-2 border-gray-700 hover:border-${dept.split(' ')[0].toLowerCase()}-400`}
                            >
                                {departmentIcons[dept]}
                                <span className="text-2xl font-semibold tracking-tight">{dept}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Test Selection */}
            {selectedDept && !selectedTest && (
                <div className="text-center">
                    <h1 className={`text-5xl font-bold mb-12 bg-gradient-to-r ${testColors[selectedDept]} bg-clip-text text-transparent animate-gradient`}>
                        {selectedDept} Challenges
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-richblack-700 rounded-lg ">
                        {availableTests.map(test => (
                            <button
                                key={test}
                                onClick={() => setSelectedTest(test)}
                                className={`p-6 rounded-xl bg-gradient-to-br ${testColors[selectedDept]} 
                                    hover:shadow-lg transition-all transform hover:scale-103 text-left
                                    flex items-center space-x-4 group bg-richblack-500 m-10 `}
                            >
                                <div className="bg-gray-900/20 p-3 rounded-lg">
                                    {departmentIcons[selectedDept]}
                                </div>
                                <span className="text-xl font-medium tracking-tight group-hover:translate-x-2 transition-transform">
                                    {test}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Test Interface */}
            {selectedTest && (
                <div>
                    {/* Test Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 p-6 rounded-2xl bg-gray-800/50 backdrop-blur-lg">
                        <h1 className={`text-4xl font-bold bg-gradient-to-r ${testColors[selectedDept]} bg-clip-text text-transparent mb-4 md:mb-0`}>
                            {selectedTest} Quest
                        </h1>
                        <div className="flex items-center space-x-6">
                            <div className="flex items-center text-cyan-400 bg-gray-900/30 px-4 py-2 rounded-lg">
                                <FiClock className="mr-2 animate-pulse" />
                                <span className="font-mono">
                                    {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
                                </span>
                            </div>
                            <div className={`px-6 py-3 rounded-lg bg-gradient-to-r ${testColors[selectedDept]} font-bold`}>
                                SCORE: {score}
                            </div>
                        </div>
                    </div>

                    {/* Start Test Button */}
                    {!testStarted && (
                        <div className="text-center mt-16">
                            <button
                                onClick={handleStartTest}
                                className={`bg-gradient-to-r ${testColors[selectedDept]} px-12 py-6 rounded-2xl 
                                    text-2xl font-bold hover:shadow-2xl transition-all transform hover:scale-105
                                    animate-bounce-in bg-yellow-50 text-richblack-800 `}
                            >
                                Begin Challenge
                            </button>
                        </div>
                    )}

                    {/* Question Display */}
                    {testStarted && currentQuestion < questions.length && (
                        <div className="bg-gray-800/50 p-8 rounded-3xl border-2 border-gray-700 backdrop-blur-lg animate-fade-in">
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center text-blue-400">
                                    <FiAlertTriangle className="mr-2" />
                                    <span className="font-semibold">Question {currentQuestion + 1} of {questions.length}</span>
                                </div>
                                <div className="w-24 h-2 bg-gray-700 rounded-full">
                                    <div 
                                        className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-500"
                                        style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                                    ></div>
                                </div>
                            </div>
                            
                            <h2 className="text-2xl mb-8 leading-relaxed font-medium" 
                                dangerouslySetInnerHTML={{ __html: questions[currentQuestion]?.question }} />
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {questions[currentQuestion]?.options.map((option, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleAnswer(option)}
                                        className={`p-4 rounded-xl bg-gray-900/30 hover:bg-gray-700/50 transition-all 
                                            text-left border-2 border-gray-700 hover:border-cyan-400
                                            hover:shadow-lg transform hover:scale-102`}
                                        dangerouslySetInnerHTML={{ __html: option }}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Results Screen */}
                    {testStarted && currentQuestion >= questions.length && (
                        <div className={`bg-gradient-to-br ${score >= 50 ? 'from-green-900/30 to-emerald-900/20' : 'from-red-900/30 to-rose-900/20'} 
                            p-12 rounded-2xl border-2 ${score >= 50 ? 'border-green-500' : 'border-red-500'} text-center backdrop-blur-lg animate-fade-in`}>
                            <h2 className="text-5xl font-bold mb-6">{score >= 50 ? 'Challenge Passed!' : 'Try Again!'}</h2>
                            <div className="flex flex-col items-center mb-8">
                                {score >= 50 ? (
                                    <FiCheckCircle className="text-6xl text-green-400 mb-4 animate-pulse" />
                                ) : (
                                    <FiXCircle className="text-6xl text-red-400 mb-4 animate-bounce" />
                                )}
                                <div className="text-3xl font-mono">
                                    Final Score: <span className={score >= 50 ? 'text-green-400' : 'text-red-400'}>{score}</span>/100
                                </div>
                            </div>
                            <div className="flex justify-center space-x-4">
                                <button 
                                    className="bg-gray-800 hover:bg-gray-700 px-8 py-4 rounded-xl text-lg transition-all"
                                    onClick={() => {
                                        setSelectedTest(null);
                                        setTestStarted(false);
                                    }}
                                >
                                    Choose Another Test
                                </button>
                                {score < 50 && (
                                    <button 
                                        className={`bg-gradient-to-r ${testColors[selectedDept]} px-8 py-4 rounded-xl text-lg 
                                            hover:shadow-lg transition-all`}
                                        onClick={handleStartTest}
                                    >
                                        Retry Challenge
                                    </button>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    </div>
);
};

// Keep shuffle function and export the same

// Helper function to shuffle array
const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

export default TestModule;