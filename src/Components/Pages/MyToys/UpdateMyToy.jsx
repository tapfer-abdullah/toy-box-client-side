/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateMyToy = () => {

    const oldData = useLoaderData();
    console.log(oldData)
    const { _id, name, quantity, seller, sellerEmail, category, details, photo, price, rating} = oldData;

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const seller = form.seller.value;
    const sellerEmail = form.sellerEmail.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const price = form.price.value;
    const rating = form.rating.value;

    const toy = {
      name,
      quantity,
      seller,
      sellerEmail,
      category,
      details,
      photo,
      price, 
      rating
    };

    console.log(toy);

    fetch(`http://localhost:5000/update/${_id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount >0) {
          Swal.fire({
            title: "Success!",
            text: "Car updated successfully",
            icon: "success",
            confirmButtonText: "Okay",
          });
          form.reset();
        }
        console.log(data)
      });
  };

  return (
    <div className="rounded-lg bg-gradient-to-r from-my-blue to-my-pink px-28 py-20 w-4/5 mx-auto my-20">
      <h3 className="text-3xl font-extrabold text-center mb-4 text-white">
        Update The Car
      </h3>

      <form onSubmit={handleSubmit}>
        {/* form row  */}
        <div className="md:flex mb-3">
          <div className="form-control md:w-1/2 w-full mr-4">
            <label className="label">
              <span className="label-text text-white text-base font-semibold">Toy name: </span>
            </label>
            <label className="input-group">
              <input defaultValue={name}
                style={{borderRadius: "10px"}}
                type="text"
                placeholder="Toy name"
                name="name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 w-full">
            <label className="label">
              <span className="label-text text-white text-base font-semibold">Available Quantity</span>
            </label>
            <label className="input-group">
              <input defaultValue={quantity}
              style={{borderRadius: "10px"}}
                name="quantity"
                type="text"
                placeholder="Available Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <div className="md:flex mb-3">
          <div className="form-control md:w-1/2 w-full mr-4">
            <label className="label">
              <span className="label-text text-white text-base font-semibold">Seller name: </span>
            </label>
            <label className="input-group">
              <input defaultValue={seller}
              style={{borderRadius: "10px"}}
                name="seller"
                type="text"
                placeholder="Seller name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 w-full">
            <label className="label">
              <span className="label-text text-white text-base font-semibold">Seller email:</span>
            </label>
            <label className="input-group">
              <input defaultValue={sellerEmail}
              style={{borderRadius: "10px"}}
                name="sellerEmail"
                type="email"
                placeholder="Seller email"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <div className="md:flex mb-3">
          <div className="form-control md:w-1/2 w-full mr-4">
            <label className="label">
              <span className="label-text text-white text-base font-semibold">Price: </span>
            </label>
            <label className="input-group">
              <input defaultValue={price}
              style={{borderRadius: "10px"}}
                name="price"
                type="text"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 w-full">
            <label className="label">
              <span className="label-text text-white text-base font-semibold">Rating:</span>
            </label>
            <label className="input-group">
              <input defaultValue={rating}
              style={{borderRadius: "10px"}}
                name="rating"
                type="text"
                placeholder="Rating"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <div className="md:flex mb-3">
          <div className="form-control md:w-1/2 w-full mr-4">
            <label className="label">
              <span className="label-text text-white text-base font-semibold">Sub category: </span>
            </label>
            <label className="input-group">
              <input defaultValue={category}
              style={{borderRadius: "10px"}}
                name="category"
                type="text"
                placeholder="Sub category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 w-full">
            <label className="label">
              <span className="label-text text-white text-base font-semibold">Details:</span>
            </label>
            <label className="input-group">
              <input defaultValue={details}
              style={{borderRadius: "10px"}}
                name="details"
                type="text"
                placeholder="Details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="form-control mb-5">
          <label className="label">
            <span className="label-text text-white text-base font-semibold">Photo URL of the toy:</span>
          </label>
          <label className="input-group">
            <input defaultValue={photo}
            style={{borderRadius: "10px"}}
              name="photo"
              type="text"
              placeholder="Toy photo URL"
              className="input input-bordered w-full"
            />
          </label>
        </div>

        <input type="submit" value="Update The Car" 
        className="btn drop-shadow-2xl btn-block bg-my-pink border-my-pink hover:bg-my-blue hover:border-my-blue" />
      </form>
    </div>
  );
};

export default UpdateMyToy;
