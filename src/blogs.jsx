import React, { useState } from "react";
import Nav from "./component/nav";
import End from "./component/end ";
import Side from "./component/side";

function Blogs() {
  const [eshow, seteShow] = useState(false);
  const [show, setShow] = useState(false);
  const [Sshow, setSshow] = useState(false);
  const [fshow, setfshow] = useState(false);
  const [Sisde,setSisde]= useState(false)
  return (
    <div  className="">
      <Nav setSisde={setSisde} />
      {
        Sisde && <Side setSisde={setSisde}/>
      }

      <div className="ml-8">

      <div className=" mr-4 ">
        <div className="mr-3 ">
          <div className="grid lg:grid-cols-6 lg:grid-rows-1 grid-cols-1 grid-rows-6 gap-3  my-6  mr-6 ">
            <div
              className="relative"
              onMouseEnter={() => {
                seteShow(true);
              }}
              onMouseLeave={() => {
                seteShow(false);
              }}
            >
              <div
                className={`bg-blue-600 ${
                  eshow ? "z-0" : "z-40"
                } bg-opacity-40 absolute top-0 left-0 w-full h-full`}
              ></div>
              <div className="absolute top-0 left-0 z-10  w-full h-full">
                <img
                  src="https://preview.colorlib.com/theme/lingua/images/blog_1.jpg"
                  className=""
                />
                <h1 className="absolute top-5 left-20 right-20  lg:left-10 lg:right-10 align-center text-white p-3">
                  Travelsed
                </h1>
              </div>
            </div>
            <div
              className="relative flex"
              onMouseEnter={() => {
                setSshow(true);
              }}
              onMouseLeave={() => {
                setSshow(false);
              }}
            >
              <div
                className={`absolute top-0 left-0  w-full h-full bg-blue-600 bg-opacity-40 ${
                  Sshow ? "z-0" : "z-40"
                }`}
              ></div>

              <div className="absolute top-0 left-0 z-10 w-full h-full">
                <img src="https://preview.colorlib.com/theme/lingua/images/blog_2.jpg" />
                <h1 className="absolute top-5 left-20 right-20  lg:left-10 lg:right-10align-center text-white p-3">
                  Travels
                </h1>{" "}
              </div>
            </div>
            <div className="relative flex group">
              <div className="absolute top-0 left-0 w-full group-hover:w-0 transition-all duration-1000 delay-200 ease-in-out h-full bg-blue-600 bg-opacity-50"></div>
              <img src="https://preview.colorlib.com/theme/lingua/images/blog_3.jpg" />
              <h1 className="absolute scale-0 group-hover:scale-125 top-5 transition-all duration-1000 delay-200 ease-in-out  left-20 right-20  lg:left-10 lg:right-10 align-center text-white p-3">
                Travels
              </h1>
            </div>
            <div
              className="relative"
              onMouseEnter={() => {
                setShow(true);
              }}
              onMouseLeave={() => {
                setShow(false);
              }}
            >
              <div
                className={`bg-blue-600 ${
                  show ? "z-0" : "z-40"
                } bg-opacity-40 absolute top-0 left-0 w-full h-full`}
              ></div>
              <div className="absolute top-0 left-0 z-10 bg-red-500 w-full h-full">
                <img
                  src="https://preview.colorlib.com/theme/lingua/images/blog_1.jpg"
                  className=""
                />
                <h1 className="absolute top-5 left-20 right-20  lg:left-10 lg:right-10 align-center text-white p-3">
                  Travelsed
                </h1>
              </div>
            </div>
            <div
              className="relative flex"
              onMouseEnter={() => {
                setfshow(true);
              }}
              onMouseLeave={() => {
                setfshow(false);
              }}
            >
              <div
                className={`absolute top-0 left-0  w-full h-full bg-blue-600 bg-opacity-40 ${
                  fshow ? "z-0" : "z-40"
                }`}
              ></div>

              <div className="absolute top-0 left-0 z-10 w-full h-full">
                <img src="https://preview.colorlib.com/theme/lingua/images/blog_2.jpg" />
                <h1 className="absolute top-5 left-20 right-20  lg:left-10 lg:right-10 align-center text-white p-3">
                  Travels
                </h1>{" "}
              </div>
            </div>
            <div className="relative flex group">
              <div className="absolute top-0 left-0 w-full group-hover:w-0 transition-all duration-1000 delay-200 ease-in-out h-full bg-blue-600 bg-opacity-50"></div>
              <img src="https://preview.colorlib.com/theme/lingua/images/blog_3.jpg" />
              <h1 className="absolute scale-0 group-hover:scale-125 top-5 transition-all duration-1000 delay-200 ease-in-out left-20 right-20  lg:left-10 lg:right-10 align-center text-white p-3">
                Travels
              </h1>
            </div>
              </div>
        </div>
      </div> 

      <div className="grid grid-cols-1 lg:grid-rows-2  gap-5 ">
        <div className="flex flex-col lg:flex-row gap-10  ">
          <div className="lg:w-8/12  relative group  ">
            <img
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRiyRuB_-WKrVJ1DUURd5FKagtXNweY9B-Vc9tv-kbEvjUY9ON1"
              alt=""
              className="w-11/12"
            />
            <div className="bg-white absolute bottom-0 h-24 group-hover:h-full w-10/12 transition-all duration-1000 delay-200 ease-in-out">
              <div>
                <p className="text-2xl text-center ">DESIGN BETTER FORM</p>
              </div>
              <div className="group-hover:opacity-100 opacity-0 m-3 transition-all duration-1000 delay-200 ease-in-out ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
                sed distinctio esse accusantium blanditiis corrupti, sint nisi
                repellendus vero, aspernatur debitis minus eveniet ea animi?
              </div>
              <div>
                <button className=" group-hover:opacity-100 opacity-0 shadow-lg drop-shadow-2xl border-2 transition-all  duration-1000 delay-700 ease-in-out">
                  Read more
                </button>
              </div>
            </div>
          </div>
          <div className="lg:w-8/12  relative group ">
            <img
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRiyRuB_-WKrVJ1DUURd5FKagtXNweY9B-Vc9tv-kbEvjUY9ON1"
              alt=""
              className="w-11/12"
            />
            <div className="bg-white absolute bottom-0 h-24 group-hover:h-full w-10/12 transition-all duration-1000 delay-200 ease-in-out">
              <div>
                <p className="text-2xl text-center ">Arts Helps Healing</p>
              </div>
              <div className="group-hover:opacity-100 opacity-0 m-3 transition-all duration-1000 delay-200 ease-in-out ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
                sed distinctio esse accusantium blanditiis corrupti, sint nisi
                repellendus vero, aspernatur debitis minus eveniet ea animi?
              </div>
              <div>
                <button className=" group-hover:opacity-100 opacity-0 shadow-lg drop-shadow-2xl border-2 transition-all  duration-1000 delay-700 ease-in-out">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 ">
          <div className="lg:w-8/12  relative group">
            <img
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRiyRuB_-WKrVJ1DUURd5FKagtXNweY9B-Vc9tv-kbEvjUY9ON1"
              alt=""
              className="w-11/12"
            />
            <div className="bg-white absolute bottom-0 h-24 group-hover:h-full w-10/12 transition-all duration-1000 delay-200 ease-in-out">
              <div>
                <p className="text-2xl text-center ">DESIGN BETTER FORM</p>
              </div>
              <div className="group-hover:opacity-100 opacity-0 m-3 transition-all duration-1000 delay-200 ease-in-out ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
                sed distinctio esse accusantium blanditiis corrupti, sint nisi
                repellendus vero, aspernatur debitis minus eveniet ea animi?
              </div>
              <div>
                <button className=" group-hover:opacity-100 opacity-0 shadow-lg drop-shadow-2xl border-2 transition-all  duration-1000 delay-700 ease-in-out">
                  Read more
                </button>
              </div>
            </div>
          </div>
          <div className="lg:w-8/12  relative group">
            <img
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRiyRuB_-WKrVJ1DUURd5FKagtXNweY9B-Vc9tv-kbEvjUY9ON1"
              alt=""
              className="w-11/12"
            />
            <div className="bg-white absolute bottom-0 h-24 group-hover:h-full w-10/12 transition-all duration-1000 delay-200 ease-in-out">
              <div>
                <p className="text-2xl text-center ">Arts Helps Healing</p>
              </div>
              <div className="group-hover:opacity-100 opacity-0 m-3 transition-all duration-1000 delay-200 ease-in-out ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
                sed distinctio esse accusantium blanditiis corrupti, sint nisi
                repellendus vero, aspernatur debitis minus eveniet ea animi?
              </div>
              <div>
                <button className=" group-hover:opacity-100 opacity-0 shadow-lg drop-shadow-2xl border-2 transition-all  duration-1000 delay-700 ease-in-out">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="  shadow-lg drop-shadow-2xl border-2 hover:text-orange-600 m-4 ml-6 px-8 py-2">
          Load More
        </button>
      </div>
      </div>
      <End />
    </div>
  );
}

export default Blogs;
