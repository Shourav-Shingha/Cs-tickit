import { ToastContainer } from 'react-toastify';
import './App.css'
import Navber from './navber/Navber';
import Banner from './banner section/Banner';

function App() {

  return (
    <div className='font-arimo'>
    <Navber></Navber>
    <Banner></Banner>
      <ToastContainer />
    </div>
  )
}

export default App
