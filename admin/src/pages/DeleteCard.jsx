import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { MdDelete } from "react-icons/md";
import backend_url from '../utils/url';


const DeleteCard = () => {
  const [questions,setQuestions] = useState([]);
  
  const fetchData = async () => {
    try{
      const res = await axios.get(`${backend_url}`)
      if(res.data.success){
        setQuestions(res.data.data)
      }
      else{
        toast.error("Fail")
      }
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData();
  },[])

  const deleteQuestion = async (id) => {
    try{
      const res = await axios.delete(`${backend_url}/delete/${id}`);
      if(res.data.success){
        toast.success(res.data.message);
        fetchData();
      }
      else{
        toast.error(res.data.message)
      }
    }catch(err){
      console.log(err)
    }
  }
  
  return (
    <div className='mx-24 my-14 w-[800px]'>
      <h2 className='text-xl text-black pb-5 text-center'>All Questions</h2>
      <div className='grid grid-cols-8 border-2 border-[#888888] py-2 px-3 text-lg text-gray-800'>
        <p className='col-span-4'>Questions</p>
        <p className='col-span-3 text-center'>Answer</p>
        <p className='text-center'>Delete</p>
      </div>
      <div>
        {
          questions.map((item,index) => {
            return(
              <div key={index} className='w-full grid grid-cols-8 items-center border border-[#a9a9a9] py-2 px-2 text-md'>
                <p className='col-span-4'>{item.question}</p>
                <p className='col-span-3 text-center'>{item.answer}</p>
                <button className='flex justify-center items-center my-2' onClick={() =>deleteQuestion(item.id)}><MdDelete size={22} /></button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default DeleteCard