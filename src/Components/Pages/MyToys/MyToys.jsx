/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import SingleMyToy from "./SingleMyToy";
import { AuthContext } from "../AuthorizationPage/AuthProvider";
import { Bars } from "react-loader-spinner";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user, loader } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [del, setDel] = useState(0);
  const [sort, setSort] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:5000/my-toys?email=${user?.email}`, {

    method: "get",
        headers: {
            "Content-Type" : "application/json",
            "sort" : sort
        },
        // body: JSON.stringify({sort}),  
    })
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [loader, del, sort]);

  const handleDelete = (id) => {
    // alert(`delete ${id}`)

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/delete/${id}`, {
          method: "delete",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setDel(del + 1);
              Swal.fire("Deleted!", "The car has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div style={{ minHeight: "70vh" }}>
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
        <div className="mt-10">
          <div className="flex justify-end my-3"> 
            <div className="dropdown dropdown-hover">
              <label tabIndex={0} className="btn m-1 bg-my-pink border-my-pink hover:bg-my-blue hover:border-my-blue">
                Sort By Price
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40 text-my-blue"
              >
                <li onClick={() => setSort(1)} className="hover:text-my-pink">
                  <a>Ascending</a>
                </li>
                <li onClick={() => setSort(-1)} className="hover:text-my-pink">
                  <a>Descending</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="overflow-x-auto  w-full mb-10">
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
                  <SingleMyToy
                    key={toy._id}
                    toy={toy}
                    handleDelete={handleDelete}
                  ></SingleMyToy>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyToys;
