import React, { Suspense } from 'react';
import CardData from '../cardData/CardData';
import StatusData from '../statusData/StatusData';

const MainData = ({customerData,card, setcard, cardDisable, setcardDisable}) => {
  return (
    <>
    <h1 className="text-2xl block font-bold  pl-16 bg-gray-100 text-gray-500">Customer Tickits</h1>
      <div className='lg:flex bg-gray-100'>
        
        <Suspense fallback={<h1>loading.....</h1>}>
           <CardData cardDisable={cardDisable} setcardDisable={setcardDisable} customerData={customerData} card={card} setcard={setcard}></CardData>
        </Suspense>
        <StatusData cardDisable={cardDisable} setcardDisable={setcardDisable} card={card}></StatusData>
      </div>
    </>
      // <div className='bg-gray-100 lg:px-16'>
      //             <div className='flex justify-between px-16'>
      //               <h2 className='text-gray-500 text-3xl'>Customer Tickits</h2>
      //               <h2 className='text-gray-500 text-3xl'>Task Status</h2>
      //             </div>
  );
};

export default MainData;