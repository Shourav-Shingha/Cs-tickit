import React, { use } from "react";
import { GoDotFill } from "react-icons/go";


const MainData = ({ customerData }) => {
  const promiseData = use(customerData);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-10">
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
        return (
          <div key={id}>
            <div className="card bg-base-100 shadow-sm border border-gray-200">
              <div className="card-body ">
                <div className="justify-between flex">
                  <h2 className="card-title font-bold text-black">
                    {title}
                  </h2>
                  <h3 className={`badge text-black p-2 ${
                        status === "Open" 
                        ? "bg-green-200 rounded-full" 
                         : status === "In Progress" 
                         ? "bg-yellow-200  rounded-full" 
                        : ""
                    }`}>
                    <GoDotFill className={` ${
                        status === "Open" 
                        ? "bg-green-600 text-green-600 rounded-full" 
                         : status === "In Progress" 
                         ? "bg-yellow-600 text-yellow-600 rounded-full" 
                        : ""
                    }` }/>{status}
                  </h3>
                </div>
                <p>{about}</p>
                <div className="text-sm text-gray-400">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-5 md:gap-2">
                        <p className="text-black">{id}</p>
                    <p className={`  p-2 ${
                        priority === "Low" 
                        ? "text-green-600  uppercase rounded-full" 
                         : priority === "High" 
                         ? "text-amber-600  uppercase rounded-full" 
                        : "text-red-600 uppercase"
                    }`}>{priority}</p>
                      </div>
                      <div className="flex gap-5 md:gap-2">
                    <p className="text-black">{name}</p>
                    <p className="text-black">{createdAt}</p>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MainData;
