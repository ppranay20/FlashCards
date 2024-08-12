import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const UpdateCard = () => {
  const [questions, setQuestions] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');

  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api');
      if (res.data.success) {
        setQuestions(res.data.data);
        console.log(res.data.data);
      } else {
        toast.error("Failed to fetch questions");
      }
    } catch (err) {
      console.error("Error fetching data:", err);
      toast.error("Error fetching data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const updateQuestion = (item) => {
    setCurrentQuestion(item);
    setNewQuestion(item.question);
    setNewAnswer(item.answer);
    setIsEditing(true);
  };

  const handleUpdate = async () => {
    try {
      const res = await axios.put(`http://localhost:3000/api/update/${currentQuestion.id}`, {
        question: newQuestion,
        answer: newAnswer,
      });
      if (res.data.success) {
        toast.success("Question updated successfully");
        setIsEditing(false);
        fetchData();
      } else {
        toast.error("Failed to update question");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setCurrentQuestion(null);
  };

  return (
    <div className='mx-24 my-14 w-[800px]'>
      <h2 className='text-xl text-black pb-5 text-center'>All Questions</h2>
      <div className='grid grid-cols-8 border-2 border-[#888888] py-2 px-3 text-lg text-gray-800'>
        <p className='col-span-4'>Questions</p>
        <p className='col-span-3 text-center'>Answer</p>
        <p className='text-center'>Update</p>
      </div>
      <div>
        {questions.map((item, index) => (
          <div key={item.id} className='w-full grid grid-cols-8 items-center border border-[#a9a9a9] py-2 px-2 text-md'>
            <p className='col-span-4'>{item.question}</p>
            <p className='col-span-3 text-center'>{item.answer}</p>
            <button className='border bg-black text-white py-1 rounded-md my-2' onClick={() => updateQuestion(item)}>
              Update
            </button>
          </div>
        ))}
      </div>

      {
      isEditing && (
        <div className='fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center'>
          <div className='bg-white p-6 rounded-md shadow-md'>
            <h3 className='text-lg mb-4'>Update Question</h3>
            <input
              type='text'
              className='border mb-2 p-2 w-full'
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
              placeholder='New Question'
            />
            <input
              type='text'
              className='border mb-4 p-2 w-full'
              value={newAnswer}
              onChange={(e) => setNewAnswer(e.target.value)}
              placeholder='New Answer'
            />
            <div className='flex justify-end'>
              <button className='bg-green-500 text-white px-4 py-2 rounded-md mr-2' onClick={handleUpdate}>
                Save
              </button>
              <button className='bg-red-500 text-white px-4 py-2 rounded-md' onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )
      }
    </div>
  );
};

export default UpdateCard;
