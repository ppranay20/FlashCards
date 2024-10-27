import React, { useState } from 'react'
import AnswerCard from './components/AnswerCard'
import QuestionCard from './components/QuestionCard'
import ReactCardFlip from 'react-card-flip'
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { useEffect } from 'react';
import axios from 'axios'
import { ToastContainer} from 'react-toastify';
import seeddata from './seeddata'

function App() {
  const [isFlipped,setIsFlipped] = useState(false);
  const [questionIndex,setQuestionIndex] = useState(0);
  const [data,setData] = useState([]);

  const fetchData = async () => {
    try{
      const res = await axios.get("https://flashcards-backend-hoxw.onrender.com/api/")
      if(res.data.success){
        setData(res.data.data);
      }
    }
    catch(err){
      console.log(err);
    }

  }

  useEffect(() => {
    fetchData();
  },[])

  const rightHandler = () => {
    if(questionIndex !== data.length-1){
      setQuestionIndex(questionIndex+1);
    }
  }
  
  const leftHandler = () => {
    if(questionIndex !== 0){
      setQuestionIndex(questionIndex-1);
    }
  }

  return (
    <div>
      <div className='h-screen flex justify-evenly items-center mb-24'>
        <button className='relative left-24' onClick={leftHandler}><FaArrowCircleLeft size={30} /></button>
            {
              data.length === 0 ? 
              seeddata.map((item,index) => {
                if(index === questionIndex){
                  return <div>
                      <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}>
                      <QuestionCard key={index} answer={item.answer} questions={item.question} isFlipped={isFlipped} setIsFlipped={setIsFlipped}></QuestionCard>
                      <AnswerCard key={index} isFlipped={isFlipped} answer={item.answer} setIsFlipped={setIsFlipped}></AnswerCard>
                      </ReactCardFlip>
                  </div>
                }
              }) : data.map((item,index) => {
                if(index === questionIndex){
                  return <div>
                      <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}>
                      <QuestionCard key={index} answer={item.answer} questions={item.question} isFlipped={isFlipped} setIsFlipped={setIsFlipped}></QuestionCard>
                      <AnswerCard key={index} isFlipped={isFlipped} answer={item.answer} setIsFlipped={setIsFlipped}></AnswerCard>
                      </ReactCardFlip>
                  </div>
                }
              })
            }
        <button className='relative right-24' onClick={rightHandler}><FaArrowCircleRight size={30} /></button>
      </div>
      <ToastContainer />
    </div>
  )
}

export default App