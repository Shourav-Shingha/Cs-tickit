import { ToastContainer } from 'react-toastify';
import './App.css'
import Navber from './navber/Navber';

function App() {

  return (
    <div >
    <Navber></Navber>
    <div className='w-11/12 mx-auto bg'>

    </div>
      <ToastContainer />
    </div>
  )
}

export default App
