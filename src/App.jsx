import { ToastContainer } from 'react-toastify';
import './App.css'
import Navber from './components/navber/Navber';
import Banner from './components/banner section/Banner';
import MainData from './components/mainSection/MainData';

const customerData=fetch('/data.json')
  .then(res=>res.json())

function App() {
  

  return (
    <div className='font-arimo'>
    <Navber></Navber>
    <Banner></Banner>
    <MainData customerData={customerData}></MainData>
      <ToastContainer />
    </div>
  )
}

export default App
