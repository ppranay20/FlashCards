import React from 'react'

function AnswerCard({isFlipped,setIsFlipped,answer}) {
  return (
    <div className='border-[1px] w-[450px] h-[280px] px-3 rounded-md shadow-md flex flex-col gap-3'>
        <h1 className='font-bold text-2xl text-center py-2'>Answer</h1>
        <p className='py-2 text-lg px-4'>{answer}</p>
        <div className='flex justify-center'>
            <button className='border bg-black text-white px-20 py-2 rounded-md my-3' onClick={() => setIsFlipped(!isFlipped)}>See Question</button>
        </div>
    </div>
  )
}

export default AnswerCard