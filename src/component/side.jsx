import React from "react";
import { AiOutlineSearch,AiOutlineArrowLeft } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import {useNavigate,Link,useLocation} from "react-router-dom";
function Side({setSisde}) {
  return (
    <div className="sticky top-0 right-0 h-full  z-50 md:hidden">
        <div className="sticky top-0 z-50 right-0">

        <div className="height-screen w-3/12 flex  gap-12 flex-col absolute top-0 right-0 z-50  justify-end border shadow-sm bg-white rounded-b-2xl ">   
       <div  className=" h-full ">
        <div className="flex-col flex h-full  ">
        <ul className="flex gap-4 text-center justify-center flex-col text-slate-600 h-full ">
          <div className="border shadow-sm mx-2 mt-2 hover:scale-110">
            <li className="hover:text-dark">
                <Link to={'/'} className="hover:text-black">
                  Home
                </Link>
                </li>
          </div>
          <div className="border shadow-sm mx-2 hover:scale-110">
            <li className="hover:text-dark">
                <Link to={'/courses'}  className="hover:text-black">
                  Courses
                </Link></li>
          </div>
          <div className="border shadow-sm mx-2 hover:scale-110">
            <li className="hover:text-dark">
                <Link to={'/Instructors'} className="hover:text-black">
                  Instructors
                </Link>
                </li>
          </div>
          <div className="border shadow-sm mx-2 hover:scale-110">
            <li className="hover:text-dark"><Link to="#" className="hover:text-black">
                  Events
                </Link></li>
          </div>
          <div className="border shadow-sm mx-2 hover:scale-110">
            <li className="hover:text-dark">  <Link to={'/blogs'} className="hover:text-black">
                  Blog
                </Link></li>
          </div>
          <div className="border shadow-sm mx-2 hover:scale-110">
            <li className="hover:text-dark"><Link to={'/contact'}className="hover:text-black">
                  Contact
                </Link></li>
          </div>
        </ul>
      </div>
      <div className="flex flex-col justify-center gap-4 m-4 ">
        <div className="flex text-xl justify-center border shadow-sm hover:scale-110">
          <AiOutlineSearch />
        </div>
        <div className="flex justify-center border shadow-sm hover:scale-110">
          <BsPerson />
        </div>
        <div className="flex justify-center border shadow-sm hover:scale-110 ">
          <AiOutlineArrowLeft  onClick={()=>{
            setSisde  (false)

          }} />
        </div>
        
      </div>
        </div>
    </div>
    </div>
    </div>
  );
}

export default Side;
