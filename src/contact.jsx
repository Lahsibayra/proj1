import React, { useState } from "react";
import Nav from "./component/nav";
import End from "./component/end ";
import Side from "./component/side";
import {
  AiOutlineClockCircle,
  AiOutlinePhone,
  AiOutlineInbox,
} from "react-icons/ai";
import { TiLocation } from "react-icons/ti";
function Contact() {
  const[bold,setbold]=useState(false)
  const [Sisde,setSisde]= useState(false)
  return (
    <div className="">
      <Nav  setSisde={setSisde}/>
      {
         Sisde && <Side setSisde={setSisde}/>
      }
      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d452205.8463298063!2d83.464376!3d27.690778!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996868839e2a553%3A0x1194302b35728cbf!2z4KS54KWN4KSsLuCkhuCkiC7gpJ_gpYAg4KSf4KWN4KSw4KWH4KSo4KS_4KSZLuCkj-CkqOCljeCkoS7gpLjgpYvgpLLgpYHgpLjgpKg!5e0!3m2!1sne!2snp!4v1687664323402!5m2!1sne!2snp"
          loading="lazy "
          className="w-full h-60 relative"
        ></iframe>
        </div>
        <div className="bg-white shadow-lg drop-shadow-xl rounded-md  lg:absolute 
        lg:right-24 lg:top-40  border flex flex-col p-10 h-4/6  lg:w-fit w-screen lg:mt-0 mt-3">
          <h1 className="text-xl   mb-3 text-bold  font-bold ">
            Get in Touch{" "}
          </h1>
          <div className="w-full grid lg:gap-12 ">
              <div className="justify-center grid lg:grid-cols-2 grid-cols-1 gap-8">
                <div className="hover:text-black  lg:w-full ">
                  <input
                    type="text"
                    placeholder="Name"
                    className="border-b-2 lg:w-full w-fit border-gray-200 hover:border-blue-600  focus:border-gray-600 outline-none font-normal  hover:text-black placeholder:focus:text-black py-4 "
                  />
                </div>
                <div className="">
                  <input
                    type="text"
                    placeholder="Email"
                    className="lg:w-full w-fit  border-b-2 border-gray-200 outline-none font-normal focus:border-gray-600   hover:border-blue-600 placeholder:focus:text-black py-4 "
                  />
                </div>
              </div>
              <div className="" onMouseOver={()=>{
                setbold(true)
              }}
                onMouseLeave={()=>{
                  setbold(false)
              }}>
                <div className={`${bold?'text-black':'text-gray-200'}`}>
                <label htmlFor="" className=" text-xl  ">Messages</label>
                </div>
                 <textarea name="" id="" cols="60" rows="2" className={`lg:w-full w-8/12 outline-none border-b-2 ${bold?'border-blue-600':'border-gray-200'} `}></textarea>
                </div>
                <div className="flex justify-center mx-2"><button className="bg-sky-900 text-center p-2 font-bold  hover:text-orange-600 text-white w-full hover:shadow-lg shadow-sky-600 my-5 rounded-md">Subscribe now</button></div>
          </div>
        </div>
        <div className="flex justify-center lg:ml-8 lg:my-0 my-4 ">
      <div className="bg-white w-full lg:h-96 h-fit flex flex-col gap-5">
        <div className="m-5">
          <p className="text-2xl font-bold pb-2">Contact Details</p>
          <div className="flex gap-3 text-xl">
            <div>
              <AiOutlineClockCircle />
            </div>
            <div>9:00 AM - 18:00 PM</div>
          </div>
          <div className="flex gap-3 text-xl">
            <div>
              <AiOutlinePhone />
            </div>
            <div>+44 300 303 0266</div>
          </div>
          <div className="flex gap-3 text-xl">
            <div>
              <AiOutlineInbox />
            </div>
            <div>info@lingua.com</div>
          </div>
          <div className="flex gap-3 text-xl">
            <div>
              <TiLocation />
            </div>
            <div>10 Suffolk st Soho, London, UK</div>
          </div>
        </div>
      </div>

        </div>

      <End />
    </div>
  );
}

export default Contact;
