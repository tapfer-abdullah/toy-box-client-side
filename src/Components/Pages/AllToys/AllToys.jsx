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
      <div>
        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box w-3/5 max-w-5xl flex justify-around items-center p-5 border-double border-2 border-my-pink shadow-lg">
            <div>
              <img src={singleData?.photo} className="w-96 h-80 p-5" alt="" />
            </div>

            <div className="divider lg:divider-horizontal"></div> 
            
            <div className="px-5 text-lg text-base-500 font-semibold">
              <h3 className="font-bold text-2xl text-center my-2 "
              >{name}</h3>


              <p className="py-2 ">
                <span className="text-my-blue">Details:</span> {details}
              </p>
              <p className="py-2 ">
                <span className="text-my-blue">Seller:</span> {seller}
              </p>
              <p className="py-2 ">
                <span className="text-my-blue">Seller mail:</span> {sellerEmail}
              </p>

              <div className="">
                <p className="py-2 ">
                  <span className="text-my-blue">Category:</span> {category}
                </p>
                <p className="py-2">
                  <span className="text-my-blue">Quantity:</span> {quantity}
                </p>
              </div>

              <div className="">
                <p className="py-2 ">
                  <span className="text-my-blue">Price:</span> ${price}
                </p>
                <p className="py-2 ">
                  <span className="text-my-blue">Rating:</span> {rating}
                </p>
              </div>

              <div className="modal-action">
                <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2 bg-red border-red hover:bg-my-blue hover:border-my-blue">
                ✕
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      
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
