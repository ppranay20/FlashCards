import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';

function AddCard() {
  const [data,setData] = useState({
    question : '',
    answer : ''
  });

  const addQuestion = async (e) => {
    e.preventDefault();
    try{
      const res = await axios.post("http://localhost:3000/api/add",{data})
      if(res.data.success){
        toast.success("Card Created Successfully",{position : 'top-right'});
        setData({
          question : '',
          answer : ''
        });
        console.log(data)
      }
    }
    catch(err){
      console.log(err);
    }
  }

  return (
    <div className='mx-[200px] mt-20'>
      <form onSubmit={addQuestion} className='border border-black rounded-md shadow-md py-4 px-12'>
          <div>
            <h1 className='font-semibold text-lg py-2'>Question</h1>
            <input onChange={(e) => setData({...data,[e.target.name] : e.target.value})} value={data.question} name='question' type="text" className='outline-none rounded-md border py-2 px-2 my-1' size={60} placeholder='enter question' required />
          </div>
          <div>
            <h1 className='font-semibold text-lg py-2'>Answer</h1>
            <input onChange={(e) => setData({...data,[e.target.name] : e.target.value})} name='answer' value={data.answer} type="text" className='outline-none rounded-md border py-2 px-2 my-1' size={60} placeholder='enter answer' required />
          </div>
          <button type='submit' className='border bg-black text-white px-12 py-2 rounded-md my-8'>Add Question</button>
      </form>
    </div>
  )
}

export default AddCard