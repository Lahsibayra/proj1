import React, { useState } from "react";
import Nav from './component/nav'
import End from "./component/end ";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Side from "./component/side";


function Home() {
  const[show,setShow]=useState(false)
  const[Sshow,setSshow]=useState(false)
  const[fshow,setfshow]=useState(false)
  const[sishow,setsishow]=useState(false)
  const[seshow,setseshow]=useState(false)
  const [Sisde,setSisde]= useState(false)
  const responsive = {
    superLargeDesktop: {
// the naming can be any, depends on you.
breakpoint: { max: 4000, min: 3000 },
items: 5
},
desktop: {
breakpoint: { max: 3000, min: 1024 },
items: 3
},
tablet: {
breakpoint: { max: 1024, min: 464 },
items: 2
},
mobile: {
breakpoint: { max: 464, min: 0 },
items: 1
}
};
  return (
    <div  className="flex flex-col scroll-smooth ">
       <Nav setSisde={setSisde} />
       {
        Sisde && <Side setSisde={setSisde}/>
      }
       <div
      
        className="bg-repeat  h-64  flex items-center justify-center my-4"
        style={{ backgroundImage: `url("/bg1.jpg")` }}
      >
        <div className="text-2xl font-bold ">
          Easy to learn language
          <div className="flex item-center justify-center mt-2">
            <button className="bg-sky-600 rounded-md px-5 py-2 text-white mt-3 ">
              Get started
            </button>
          </div>
        </div>
      </div>
     <div className="flex gap-2 justify-center   m-6 ">
    
<Carousel autoPlay={false} swipeable={true} draggable={true} infinite={false}
 responsive={responsive} className=" lg:w-10/12 w-full z-10  justify-center flex gap-1 item-center ">

  <div className=" "><div className="flex flex-col justify-center px-4 m-2 text-center hover:scale-105 transition-all duration-1000 ease-in-out delay-200 w-fit">
          <img
            src="https://preview.colorlib.com/theme/lingua/images/Swedish.svg"
            className="h-7"
          />
          <div>Swedish</div>
        </div></div>
        <div className="flex flex-col px-4  text-center hover:scale-105 m-2 transition-all duration-1000 ease-in-out delay-200 w-fit">
          <img
            src="https://preview.colorlib.com/theme/lingua/images/English.svg"
            className="h-7"
          />
          <div>English</div>
        </div>
        <div className="flex flex-col px-4  text-center hover:scale-105 m-2 transition-all duration-1000 ease-in-out delay-200 w-fit">
          <img
            src="https://preview.colorlib.com/theme/lingua/images/Ukrainian.svg"
            className="h-7"
          />
          <div>Ukrian</div>
        </div>
        <div className="flex flex-col px-4  text-center hover:scale-105 m-2 transition-all duration-1000 ease-in-out delay-200 w-fit">
          <img
            src="https://preview.colorlib.com/theme/lingua/images/Italian.svg"
            className="h-7"
          />
          <div>Italian</div>
        </div>
        <div className="flex  flex-col px-4  text-center hover:scale-105 m-2 transition-all duration-1000 ease-in-out delay-200 w-fit">
          <img
            src="https://preview.colorlib.com/theme/lingua/images/Chinese.svg"
            className="h-7"
          />
          <div>Chinese</div>
        </div>

</Carousel>
      </div>
       <div className="justify-center flex flex-col gap-7 m-3  ">
        <div className="text-2xl flex  font-bold  justify-center p-2">
          Popular online course
        </div>
        <div className="flex lg:flex-row flex-col gap-2 m-4">
          <div className="shadow-lg drop-shadow-2xl border-2">
            <div>
              <img src="https://preview.colorlib.com/theme/lingua/images/course_1.jpg" />
            </div>
            <div className="p-2">
              <h1 className="bold text-xl ">Vocabulary </h1>
              Sarah Parker English Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Fusce enim nulla
            </div>
          </div>
          <div className="shadow-lg drop-shadow-2xl border-2">
            <div>
              <img src="https://preview.colorlib.com/theme/lingua/images/course_2.jpg" />
            </div>
            <div className="p-2">
              <h1 className="bold text-xl">Vocabulary </h1>
              Sarah Parker English Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Fusce enim nulla
            </div>
          </div>
          <div className="shadow-lg drop-shadow-2xl border-2">
            <div>
              <img src="https://preview.colorlib.com/theme/lingua/images/course_3.jpg" />
            </div>
            <div className="p-2">
              <h1 className="bold text-xl">Vocabulary</h1>
              Sarah Parker English Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Fusce enim nulla
            </div>
          </div>
        </div>
        <div className=" lg:h-96 mt-6 w-full">
          <div className="mt-3 p-2 flex justify-center text-xl font-bold">
            Best tutor in the town
          </div>
          <div className="flex lg:flex-row flex-col gap-2 m-4">
            <div className="flex flex-col justify center shadow-lg drop-shadow-2xl border-2 ">
              <div className="flex justify-center">
                <img
                  src="https://preview.colorlib.com/theme/lingua/images/instructor_1.jpg"
                  className="rounded-full border-4"
                />
              </div>
              <div className="text-center">
                {" "}
                <h1 className="bold text-2xl text-center">Sarha parker</h1>{" "}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
                porro
              </div>
            </div>
            <div className="flex flex-col justify center shadow-lg drop-shadow-2xl border-2">
              <div className="flex justify-center">
                <img
                  src="https://preview.colorlib.com/theme/lingua/images/instructor_2.jpg"
                  className="rounded-full border-4"
                />
              </div>
              <div className="text-center">
                {" "}
                <h1 className="bold text-2xl text-center">Sarha parker</h1>Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Error dolorem{" "}
              </div>
            </div>
            <div className="flex flex-col justify center shadow-lg drop-shadow-2xl border-2">
              <div className="flex justify-center">
                <img
                  src="https://preview.colorlib.com/theme/lingua/images/instructor_3.jpg"
                  className="rounded-full border-4"
                />
              </div>
              <div className=" text-center">
                {" "}
                <h1 className="bold text-2xl text-center">Sarha parker</h1>Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Error dolorem{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col mt-5 lg:h-96 mx-4 ">
          <div className="shadow-lg drop-shadow-2xl border-2 p-2 mt-3 flex flex-col lg:w-5/12 w-full lg:h-fit ">
            <form action="">
              <h1 className="text-center font-bold">Course for free</h1>
              <div className="flex lg:flex-row flex-col gap-3">
                <div>
                  <label htmlFor="" className="lg:p-2  p-1 lg:pr-4">
                    Name:
                  </label>
                  <input
                    type="text"
                    placeholder="enter your name"
                    className="border-none border-b-2 border-black p-2"
                  />
                </div>
                <div>
                  <label htmlFor="" className="p-2  ">
                    Email:
                  </label>
                  <input
                    type="text"
                    placeholder="enter your emaik"
                    className="border-none border-b-2 p-2"
                  />
                </div>
              </div>
              <div className="flex lg:flex-row flex-col gap-3 mt-2 ">
                <div>
                  <label htmlFor="" className="lg:p-2">
                    address:
                  </label>
                  <input
                    type="text"
                    placeholder="enter your addressname"
                    className="border-none border-b-2 border-black p-2"
                  />
                </div>
                <div>
                  <label htmlFor="" className="p-2 lg:pr-4 pr-8">
                    ID:
                  </label>
                  <input
                    type="text"
                    placeholder="enter your id"
                    className="border border-b-black p-2"
                  />
                </div>
              </div>
              <div className="flex item-center justify-center mt-3">
                <button className="border-2 bg-orange-900 text-white hover:text-black rounded-md p-2 ">
                  REGISTER NOW
                </button>
              </div>
            </form>
          </div>
          <div className=" h-fit m-5 ml-9 lg:w-5/12 w-11/12">
            <h1 className="text-2xl bold ">Register Now</h1>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit, consectetur iure magni sint blanditiis, aliquam
              consequatur, ex rerum aperiam vero nisi numquam tempore.
            </div>
            <div className="lg:flex gap-3 text-2xl bold mt-3 lg:flex-row hidden ">
              <div>Days</div>
              <div>hours</div>
              <div>minutes</div>
              <div>seconds</div>
            </div>
          </div>
        </div>
        <div className=" drop-shadow-2xl  m-4  ">
          <h1 className="text-2xl bold my-5 lg:text-center font-bold">Up Comming Events</h1>
          <div className="flex lg:flex-row flex-col  gap-3 ">
            <div className="relative lg:w-4/12 h-fit">
              <div>
                <img
                  src="https://preview.colorlib.com/theme/lingua/images/event_1.jpg"
                  className="w-full h-full relative"
                />
              </div>
              <div className="relative bg-white w-full flex  z-20 text-black gap-6 p-5">
                <div className=" absolute bottom-0 left-0 bg-white text-center pb-2">
                  networking day.
                </div>
                <div className="bg-blue-200 z-10 absolute bottom-0 right-0 p-2">
                  free
                </div>
              </div>
            </div>
            <div className=" lg:w-4/12 h-fit ">
              <div>
                <img
                  src="https://preview.colorlib.com/theme/lingua/images/event_2.jpg"
                  className="w-full h-full"
                />
              </div>
              <div className="relative bg-white w-full flex  z-20 text-black gap-6 p-5">
                <div className=" absolute bottom-0 left-0 bg-white text-center pb-2">
                  networking day.
                </div>
                <div className="bg-blue-200 z-10 absolute bottom-0 right-0 p-2">
                  free
                </div>
              </div>
            </div>
            <div className=" lg:w-4/12 h-fit lg:mr-7 ">
              <div>
                <img
                  src="https://preview.colorlib.com/theme/lingua/images/event_3.jpg"
                  className="w-full h-full"
                />
              </div>
              <div className="relative bg-white w-full flex  text-black gap-6 p-5">
                <div className=" absolute bottom-0 left-0 bg-white text-center pb-2">
                  networking day.
                </div>
                <div className="bg-blue-200 z-10 absolute bottom-0 right-0 p-2">
                  free
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:h-96  m-4  ">
          <div className="flex  ">
            <div className="">
              <h1 className="text-bold text-2xl text-center font-bold"> Our blogs</h1>
              <div className="p-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Architecto mollitia molestiae laboriosam.
              </div>
              <div className="flex lg:flex-row flex-col gap:2 ">
                <div className="flex flex-col  gap-3 mb-4 lg:mb-0  h-fit">
                  <div className="grid grid-cols-3 align-center gap-2 lg:w-7/12 w-full ">
                    <div className="relative flex " onMouseEnter={()=>{
                     setShow(true)
                    }}
                    onMouseLeave={()=>{
                      setShow(false)
                    }}
                    >
                      <div className={`bg-blue-600 ${show?'z-0':"z-40"} bg-opacity-40 absolute top-0 left-0 w-full h-full`}>

                      </div>
                      <div className="absolute top-0 left-0 z-10 bg-red-500 w-full h-full">
                      <img
                        src="https://preview.colorlib.com/theme/lingua/images/blog_1.jpg"
                        className=""
                      />
                      <h1 className="absolute top-2 lg:top-5 lg:left-10 lg:right-10 align-center text-white p-3">
                        Travelsed
                      </h1>

                      </div>
                    </div>
                    <div className="relative flex "  onMouseEnter={()=>{
                     setSshow(true)
                     }}
                     onMouseLeave={()=>{
                      setSshow(false)
                    }}>
                      <div className={`absolute top-0 left-0  w-full h-full bg-blue-600 bg-opacity-40 ${Sshow?'z-0':'z-40'}`} >

                      </div>

                      <div className="absolute top-0 left-0 z-10 w-full h-full">
                      <img src="https://preview.colorlib.com/theme/lingua/images/blog_2.jpg" />
                      <h1 className="absolute top-2 lg:top-5 lg:left-10 lg:right-10 align-center text-white p-3 ">
                        Travels
                      </h1>{" "}

                      </div>
                    </div>
                    <div className="relative flex group" >
                      <div className="absolute top-0 left-0 w-full group-hover:w-0 transition-all duration-1000 delay-200 ease-in-out h-full bg-blue-600 bg-opacity-50"></div>
                      <img src="https://preview.colorlib.com/theme/lingua/images/blog_3.jpg" />
                      <h1 className="absolute scale-0 group-hover:scale-125 lg:top-5 top-2 transition-all duration-1000 delay-200 ease-in-out  lg:left-10 lg:right-10 align-center text-white p-3">
                        Travels
                      </h1>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 align-center gap-2 lg:w-7/12 w-full mt-2">
                  <div className="relative flex"  onMouseEnter={()=>{
                     setfshow(true)
                     }}
                     onMouseLeave={()=>{
                      setfshow(false)
                    }}>
                      <div className={`absolute top-0 left-0  w-full h-full bg-blue-600 bg-opacity-40 ${fshow?'z-0':'z-50'}`} >

                      </div>
                    <div className="relative flex">
                      <img src="https://preview.colorlib.com/theme/lingua/images/blog_4.jpg" />
                      <h1 className="absolute top-2 lg:top-5 lg:left-10 lg:right-10 align-center text-white p-3">
                        Travels
                      </h1>
                    </div>
                    </div>
                    <div className="relative flex" onMouseEnter={()=> 
                    setsishow(true)}
                    onMouseLeave={()=>
                    setsishow(false)}>
                      <div className={`absolute top-0 left-0 w-full h-full bg-blue-600 bg-opacity-40 ${sishow?'z-0':'z-50'}`}>

                      </div>
                      <div className="absolute top-0 left-0 z-10 w-full h-full" >
                      <img src="https://preview.colorlib.com/theme/lingua/images/blog_5.jpg" />{" "}
                      <h1 className="absolute top-2 lg:top-5 lg:left-10 lg:right-10 align-center text-white p-3">
                        Travels
                      </h1>

                      </div>
                    </div>
                    <div className="relative flex "onMouseEnter={()=>{
                      setseshow(true)
                    }}
                    onMouseLeave={()=>{
                      setseshow(false)
                    }}>
                      <div className={`absolute left-0 top-0 w-full h-full bg-blue-600 opacity-40 ${seshow?'z-0':'z-50'}`} >

                      </div>
                      {" "}
                      <div className=" absolute h-full w-full z-10">
                      <img src="https://preview.colorlib.com/theme/lingua/images/blog_6.jpg" />
                      <h1 className="absolute top-2 lg:top-5 lg:left-10 lg:right-10 align-center text-white p-3">
                        Travels
                      </h1>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-9/12 relative group mt-4 lg:mt-0 ">
                  <img
                    src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRiyRuB_-WKrVJ1DUURd5FKagtXNweY9B-Vc9tv-kbEvjUY9ON1"
                    alt=""
                    className="w-9/12 "
                  />
                  <div className="absolute bottom-0 h-24 group-hover:h-full w-6/12 bg-white transition-all duration-1000 delay-200 ease-in-out">
                    <div className="">
                      <p className="text-2xl text-center ">DESIGN BETTER FORM</p>
                    </div>
                    <div className="group-hover:opacity-100 opacity-0 m-3 transition-all  duration-1000 delay-200 ease-in-out lg:flex hidden ">repellendus vero, aspernatur debitis minus eveniet ea animi?</div>
                    <div><button className=" group-hover:opacity-100 opacity-0 shadow-lg drop-shadow-2xl border-2 transition-all  duration-1000 delay-700 ease-in-out">Read more</button></div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <End/>
    </div>
  );
}

export default Home;
