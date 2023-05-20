/* eslint-disable no-unused-vars */
import React from "react";
import useTitle from "../../Title/Title";

const Blog = () => {
  useTitle("Blog");
  return (
    <div>
      <div className="text-center my-12">
        <h3 className="text-3xl font-semibold mb-3 text-my-blue">
          All <span className="text-my-pink">Blogs</span>
        </h3>
        <p className="text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, porro
          iure eligendi vero vel quo.
        </p>
      </div>
    </div>
  );
};

export default Blog;
