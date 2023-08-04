import React, { useState } from "react"
import { AiOutlineSearch,AiOutlineMenu } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import {useNavigate,Link,useLocation} from "react-router-dom";
function Nav({setSisde}) {
  const location=useLocation()
  console.log(location)

  return (
    
    <div className='sticky top-0 z-50 w-full bg-white'>
    <div className=" sticky top-0 z-10 bg-white ">
      <div className={`flex gap-1 lg:px-5 relative `}>
        <div className='grid gap-full lg:flex grid-cols-2 w-full lg:w-fit   '>
          <div className="text-bold lg:text-3xl text-sky-500 lg:pr-3 py-2 pl-2 pr-0 w-fit  ">Lingua</div>
          <div className='flex   lg:hidden  p-3 justify-end  '>
          <AiOutlineMenu  onClick={()=>{
            setSisde(true)


          }
           } />
          </div>

        </div>
          <div className='lg:flex hidden lg:w-11/12 lg:justify-center'>

          <div className="lg:flex lg:w- full justify-center  w-9/12  ">
            <ul className="flex lg:gap-6 text-slate-500 gap-1 lg:p-2 py-2 lg:text-xl  justify-center">
              <li>
                <Link to={'/'} className="hover:text-black">
                  Home
                </Link>
              </li>
              <li>
                <Link to={'/courses'}  className="hover:text-black">
                  Courses
                </Link>
              </li>
              <li>
                <Link to={'/Instructors'} className="hover:text-black">
                  Instructors
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-black">
                  Events
                </Link>
              </li>
              <li>
                <Link to={'/blogs'} className="hover:text-black">
                  Blog
                </Link>
              </li>
              <li>
                <Link to={'/contact'}className="hover:text-black">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className='lg:flex justify-center gap-2 hidden'>

          <div className="  lg:flex text-bold  p-2 pr-1 text-2xl ">
            <AiOutlineSearch />
          </div>
          <div className=" text-bold  p-2 pl-1 text-2xl ">
            <BsPerson/>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Nav
