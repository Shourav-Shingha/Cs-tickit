import { ToastContainer } from "react-toastify";
import "./App.css";
import Navber from "./components/navber/Navber";
import Banner from "./components/banner section/Banner";
import MainData from "./components/mainSection/mainData/MainData";
import { useState } from "react";
import Footer from "./components/footer/Footer";

const customerData = fetch("/data.json").then((res) => res.json());

function App() {
  const [card, setcard] = useState([]);
  const [cardDisable, setcardDisable] = useState([]);
  return (
    <div className="font-arimo">
      <Navber></Navber>
      <Banner cardDisable={cardDisable}></Banner>
      <div className="bg-gray-100">
        <MainData
        cardDisable={cardDisable}
        setcardDisable={setcardDisable}
        card={card}
        setcard={setcard}
        customerData={customerData}
      ></MainData>
      <Footer></Footer>
      </div>
      <ToastContainer position="top-left" toastClassName="!bg-gradient-to-r from-[#bdf7c6] via-[#8ee0c3] to-[#73d7e0] !text-white" hideProgressBar={false} autoClose={1500} />
    </div>
  );
}

export default App;
