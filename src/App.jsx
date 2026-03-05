import { ToastContainer } from 'react-toastify';
import './App.css'
import Navber from './components/navber/Navber';
import Banner from './components/banner section/Banner';
import MainData from './components/mainSection/mainData/MainData';
import { useState } from 'react';
import Footer from './components/footer/Footer';


const customerData=fetch('/data.json')
  .then(res=>res.json())

function App() {
  const[card, setcard]=useState([])
  const [cardDisable, setcardDisable]=useState([])
  return (
    <div className='font-arimo'>
    <Navber></Navber>
    <Banner cardDisable={cardDisable}></Banner>
    <MainData cardDisable={cardDisable} setcardDisable={setcardDisable} card={card} setcard={setcard} customerData={customerData}></MainData>
    <Footer></Footer>
      <ToastContainer />
    </div>
  )
}

export default App
