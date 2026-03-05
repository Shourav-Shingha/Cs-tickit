import React, { use } from "react";
import { GoDotFill } from "react-icons/go";
import { FaRegCalendarAlt } from "react-icons/fa";

const CardData = ({ customerData, cardDisable, setcardDisable }) => {
  const promiseData = use(customerData);

  const HandleClick = (data) => {
    if (!cardDisable.some(t => t.id === data.id)) {
      setcardDisable(prev => [...prev, { ...data, resolved: false }]);
    }
  };

  return (<>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:px-16 py-5">
      {promiseData.map((data) => {
        const {
          id,
          createdAt,
          customer: name,
          title,
          description: about,
          priority,
          status,
        } = data;
        const isHidden = cardDisable.some(t => t.id === id);

        return (
          !isHidden && (
            <div key={id}>
              <div
                onClick={() => HandleClick(data)}
                className="card bg-white shadow-sm border border-gray-200 cursor-pointer"
              >
                <div className="card-body ">
                  <div className="justify-between md:flex">
                    <h2 className="card-title font-bold text-black">{title}</h2>
                    <h3
                      className={`badge text-black p-2 ${
                        status === "Open"
                          ? "bg-green-200 rounded-full"
                          : status === "In Progress"
                          ? "bg-yellow-200 rounded-full"
                          : ""
                      }`}
                    >
                      <GoDotFill
                        className={`${
                          status === "Open"
                            ? "bg-green-600 text-green-600 rounded-full"
                            : status === "In Progress"
                            ? "bg-yellow-600 text-yellow-600 rounded-full"
                            : ""
                        }`}
                      />
                      {status}
                    </h3>
                  </div>
                  <p>{about}</p>
                  <div className="text-sm text-gray-400">
                    <div className="flex justify-between items-center">
                      <div className="md:flex items-center gap-2  md:gap-2">
                        <p className="text-black">{id}</p>
                        <p
                          className={`p-2 ${
                            priority === "Low"
                              ? "text-green-600 uppercase rounded-full"
                              : priority === "High"
                              ? "text-amber-600 uppercase rounded-full"
                              : "text-red-600 uppercase"
                          }`}
                        >
                          {priority}
                        </p>
                      </div>
                      <div className="md:flex gap-2 md:gap-2">
                        <p className="text-black">{name}</p>
                        <FaRegCalendarAlt className="text-gray-400 text-xl ml-3" />
                        <p className="text-black">{createdAt}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        );
      })}
    </div>
  </>)
};

export default CardData;