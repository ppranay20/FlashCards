import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Routes,Route } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddCard from './pages/AddCard'
import DeleteCard from './pages/DeleteCard'
import UpdateCard from './pages/UpdateCard'

const App = () => {
  return (
    <div className='bg-[#fcfcfc]'>
      <ToastContainer />
      <Navbar></Navbar>
      <hr className='border-gray-950' />
      <div className='w-[1200px] m-auto flex min-h-[100vh]'>
        <Sidebar></Sidebar>
        <div>
          <Routes>
            <Route path='/add' element={<AddCard></AddCard>}></Route>
            <Route path='/update' element={<UpdateCard></UpdateCard>}></Route>
            <Route path='/delete' element={<DeleteCard></DeleteCard>}></Route>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App