/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const SingleToyCard = ({ toy }) => {
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
  } = toy;
  return (
    // <div>
    //   <img src={photo} alt="" className="w-96 h-96"/>
    //   <h4>{name}</h4>

    // </div>

    <tr className="text-center">
      <td></td>
      <td>
        <div className="mask w-32 h-28">
          <img src={photo} alt="Avatar Tailwind CSS Component" />
        </div>
      </td>
      <td>
        <div className="font-bold">Hart Hagerty</div>
      </td>

      <td>{"$ " + price}</td>
      <td>{quantity}</td>
      <td>{seller}</td>
      <td>{category}</td>
      <th>
        <Link className="btn btn-outline border-my-pink text-my-pink hover:border-my-blue hover:bg-my-blue">View Details</Link>
      </th>
    </tr>
  );
};

export default SingleToyCard;
