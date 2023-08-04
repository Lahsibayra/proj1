import React,{useState} from 'react'
import Nav from './component/nav'
import End from './component/end '
import { info } from 'autoprefixer'
import Side from './component/side'


function Instructors() {
  const [Sisde,setSisde]= useState(false)
  const Info=[
    {
      
      mgs:"https://preview.colorlib.com/theme/lingua/images/instructor_2.jpg"
    },
    {
      
      mgs:"https://preview.colorlib.com/theme/lingua/images/instructor_1.jpg"
    },   {
     
      mgs:"https://preview.colorlib.com/theme/lingua/images/instructor_3.jpg"

    },  {
      
      mgs:"https://preview.colorlib.com/theme/lingua/images/instructor_2.jpg"
    },
    {
      
      mgs:"https://preview.colorlib.com/theme/lingua/images/instructor_1.jpg"
    },   {
      
      mgs:"https://preview.colorlib.com/theme/lingua/images/instructor_3.jpg"

    }, 
      {
      
      mgs:"https://preview.colorlib.com/theme/lingua/images/instructor_3.jpg"

    },
       {
      
      mgs:"https://preview.colorlib.com/theme/lingua/images/instructor_3.jpg"

    }, 
       {
      
      mgs:"https://preview.colorlib.com/theme/lingua/images/instructor_3.jpg"

    },
  ]
  return (
    <div>
        <Nav setSisde={setSisde}/>
         {
          Sisde && <Side setSisde={setSisde}/>
         }

        <div className="my-10">
          <div className='flex justify-center text-2xl font-bold border lg:w-4/12 w-full h-64 m-auto bg-slate-400 rounded-lg'>
            <div className='text-center h-fit m-auto'> 
            <div><p className='m-2'>BE</p></div>
            <div><p className='m-2'>THE BEST</p></div>
            <div><p className='text-blue-600 m-2'>TEACHER</p></div>

            </div>
           
           
          </div>
          
          <div className="mt-5 p-2 flex justify-center text-2xl font-bold">
            Best tutor in the town
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 w-9/12 mx-auto gap-8">

            {
              Info.slice(0, 3).map((value,i)=>{
                return  <div  className="flex flex-col cursor-pointer justify-center shadow-lg  p-4 hover:scale-105 duration-1000 delay-200 ease-in-out transition-all ">
                <div className="flex justify-center">
                  <  img src={value.mgs}
                    className="rounded-full border-4"
                  />
                </div>
                <div>
                  {" "}
                  <h1 className="bold text-2xl text-center">sarha parker</h1>{" "}
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
                  porro
                </div>
              </div>
              })
            }
         
           
          </div>
          <div className='py-6'>
            <div className='text-center p-4 text-2xl font-bold'>Best in area</div>
            <div className="grid lg:grid-cols-3 grid-cols-1 w-9/12 mx-auto gap-8">

{
  Info.map((val,i)=>{
    return  <div  className="flex cursor-pointer  shadow-lg  p-4 hover:scale-105 duration-1000 delay-200 ease-in-out transition-all ">
    <div className="flex justify-center h-14 w-14">
      <img
src={val.mgs}
        className="rounded-full border-4  h-14 w-14"
      />
    </div>
  <div>
    <div>teacher name</div>
    <div>teacher</div>
    
  </div>
  </div>
  })
}


</div>

          </div>
        </div>
        <End/> 
      
    </div>
  )
}

export default Instructors
