/* eslint-disable no-unused-vars */
import React from "react";

const Banner = () => {
  const img = "https://i8.amplience.net/i/egl/toys-240423-gooutdoors-ld";
  const img2 =
    "https://www.smarterkids.com/static/homepage-18a1bd7ddcc32e7393a29cd6973790e2.jpg";

    const overlay = <div
    className="absolute top-0 w-full cover h-full  bg-opacity-60 flex items-center justify-center"
    style={{ background: "rgba(0, 0, 0, .5)" }}
  >
    <div className="text-white">
      <div className="w-2/3 mx-auto text-center">
        <h2 className="text-6xl font-bold uppercase">
          Pick your best toy for your kid
        </h2>
        <p className="mb-6 mt-4 text-xl">
          Make play time a blast with our finest toys and games!
        </p>
        <div>
          <button className="btn font-bold bg-my-pink border-my-pink text-white hover:bg-my-blue mr-5 hover:border-my-blue">
            Purchase Now
          </button>

        </div>
      </div>
    </div>
  </div>

  return (
    <div className="relative rounded-lg mt-10">
      <div className="carousel w-full rounded-lg">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img2} className="w-full " />

          {overlay}

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle bg-my-blue border-my-blue hover:bg-my-pink hover:border-my-pink ">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle bg-my-blue border-my-blue hover:bg-my-pink hover:border-my-pink">
              ❯
            </a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
          <img src={img} className="w-full" />
          {overlay}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle bg-my-blue border-my-blue hover:bg-my-pink hover:border-my-pink">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle bg-my-blue border-my-blue hover:bg-my-pink hover:border-my-pink">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img2} className="w-full" />
          {overlay}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle bg-my-blue border-my-blue hover:bg-my-pink hover:border-my-pink">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle bg-my-blue border-my-blue hover:bg-my-pink hover:border-my-pink">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img} className="w-full" />
          {overlay}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle bg-my-blue border-my-blue hover:bg-my-pink hover:border-my-pink">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle bg-my-blue border-my-blue hover:bg-my-pink hover:border-my-pink">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
