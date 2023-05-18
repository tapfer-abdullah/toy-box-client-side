/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleToyCard from "./SingleToyCard";

const AllToys = () => {
  const allToys = useLoaderData();
  console.log(allToys);
  return (
    <div>
      <div className="overflow-x-auto  w-full my-10">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="text-center">
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
              <SingleToyCard key={toy._id} toy={toy}></SingleToyCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
