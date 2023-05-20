/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleToyCard from "./SingleToyCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { AuthContext } from "../AuthorizationPage/AuthProvider";
import { Bars } from "react-loader-spinner";
import useTitle from "../../Title/Title";
import ViewDetails from "../Shared/ViewDetails";
AOS.init();

const AllToys = () => {
  useTitle("All-Toys");
  const [allToys, setAllToy] = useState([]);
  const { loader } = useContext(AuthContext);
  // const allToys = useLoaderData();
  const [singleData, setSingleData] = useState({});
  const [limit, setLimit] = useState(20);

  useEffect(() => {
    fetch(`http://localhost:5000/all-toys?limit=${limit}`)
      .then((res) => res.json())
      .then((data) => {
        setAllToy(data);
      });
  }, [limit]);

  console.log(allToys);
  return (
    <div>
      <ViewDetails singleData={singleData}></ViewDetails>

      {loader ? (
        <div className="flex justify-center items-center">
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
                <th></th>
                <th>Toy Photo</th>
                <th>Toy Name</th>
                <th>Price</th>
                <th>Available Quantity</th>
                <th>Seller</th>
                <th>Sub-category</th>
                <th>View Details</th>
              </tr>
            </thead>
            <tbody>
              {allToys.map((toy) => (
                <SingleToyCard
                  key={toy._id}
                  toy={toy}
                  setSingleData={setSingleData}
                ></SingleToyCard>
              ))}
            </tbody>
          </table>
          <div
            className={`flex items-center justify-center ${
              limit == 0 && "hidden"
            }`}
          >
            <button
              onClick={() => {
                setLimit(0);
              }}
              className="btn px-10 text-base font-semibold bg-my-pink border-my-pink hover:bg-my-blue hover:border-my-blue"
            >
              See All
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllToys;
