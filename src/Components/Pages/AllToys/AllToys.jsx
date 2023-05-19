/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
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
  const {loader} = useContext(AuthContext);
  const allToys = useLoaderData();
  const [singleData, setSingleData] = useState({});

  const {
    name,
    quantity,
    seller,
    sellerEmail,
    category,
    details,
    photo,
    price,
    rating,
  } = singleData;

  console.log(allToys);
  return (
    <div>
      <ViewDetails singleData = {singleData}></ViewDetails>
      
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
      </div>
      )}
    </div>
  );
};

export default AllToys;
