/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import SingleMyToy from "./SingleMyToy";
import { AuthContext } from "../AuthorizationPage/AuthProvider";
import { Bars } from "react-loader-spinner";

const MyToys = () => {
  const { user, loader } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/my-toys?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [loader]);

  return (
    <div style={{minHeight: "70vh"}}>
      {loader ? (
        <div className="flex justify-center items-center mt-20">
            <Bars
          height="80"
          width="80"
          color="#ff6799"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
        </div>
      ) : (
        <div className="overflow-x-auto  w-full my-10">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr className="text-center text-my-blue">
                <th>Delete</th>
                <th>Toy Photo</th>
                <th>Toy Name</th>
                <th>Price</th>
                <th>Available Quantity</th>
                <th>Seller</th>
                <th>Sub-category</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {myToys.map((toy) => (
                <SingleMyToy key={toy._id} toy={toy}></SingleMyToy>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyToys;
