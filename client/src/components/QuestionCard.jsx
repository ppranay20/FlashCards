import React from 'react'
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function QuestionCard({isFlipped,setIsFlipped,questions,answer}) {
  const [attempted,setAttempted] = useState(false);
  const [inputAnswer,setInputAnswer] = useState('');

  const onClickHandler = (e) => {
      e.preventDefault();
      setIsFlipped(!isFlipped)
  }

  const checkAnswer = (e) => {
    e.preventDefault();
    if(inputAnswer === answer){
      toast.success("Correct Answer",{position : "top-center"});
    }
    else{
      toast.error("wrong Answer",{position : "top-center"})
    }

    setAttempted(true);
  }

  return (
    <form onSubmit={checkAnswer} className='border-[1px] w-[450px] min-h-[280px] px-3 rounded-md shadow-md flex flex-col gap-3'>
        <h1 className='font-bold text-2xl text-center py-2'>Question</h1>
        <p className='py-2 text-lg px-4'>{questions}</p>
        <input type="text" onChange={(e) => setInputAnswer(e.target.value)} required placeholder='Enter the answer' className='outline-none border-black border-[1px] rounded-lg px-2 py-1 w-[200px] mx-auto my-3' />
        <div className='flex justify-center flex-col'>
          <button type='submit' className='border bg-black text-white px-20 py-1.5 mx-20 rounded-md my-3'>Submit</button>
          {attempted && <button className='border bg-black text-white px-20 py-1.5 mx-20 rounded-md my-3' onClick={onClickHandler}>See Answer</button>}
        </div>
    </form>
  )
}

export default QuestionCard