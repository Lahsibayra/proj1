import React , {useState}from 'react'
import Nav from './component/nav'
import End from './component/end '
import Side from './component/side'

function Courses() {
  const [Sisde,setSisde]= useState(false)
  return (
    <div className=''>
      <Nav setSisde={setSisde} />
       {
        Sisde && <Side setSisde={setSisde}/>
      }
      <div className='h1 text-xl flex gap-8 justify-center mt-8 p-3  '>Learn Languages Easily</div>
      <div className="flex lg:gap-8 justify-center mt-8 mx-2 lg:mx-0">
        
      <div className="flex flex-col justify-center lg:px-4 m-2 text-center hover:scale-105 transition-all duration-1000 ease-in-out delay-200 w-fit">
          <img
            src="https://preview.colorlib.com/theme/lingua/images/Swedish.svg"
            className="h-7"
          />
          <div>Swedish</div>
        </div>
        <div className="flex flex-col lg:px-4  text-center hover:scale-105 m-2 transition-all duration-1000 ease-in-out delay-200 w-fit">
          <img
            src="https://preview.colorlib.com/theme/lingua/images/English.svg"
            className="h-7"
          />
          <div>English</div>
        </div>
        <div className="flex flex-col lg:px-4  text-center hover:scale-105 m-2 transition-all duration-1000 ease-in-out delay-200 w-fit">
          <img
            src="https://preview.colorlib.com/theme/lingua/images/Ukrainian.svg"
            className="h-7"
          />
          <div>Ukrian</div>
        </div>
        <div className="flex flex-col lg:px-4  text-center hover:scale-105 m-2 transition-all duration-1000 ease-in-out delay-200 w-fit">
          <img
            src="https://preview.colorlib.com/theme/lingua/images/Italian.svg"
            className="h-7"
          />
          <div>Italian</div>
        </div>
        <div className="flex  flex-col lg:px-4 text-center hover:scale-105 m-2 transition-all duration-1000 ease-in-out delay-200 w-fit">
          <img
            src="https://preview.colorlib.com/theme/lingua/images/Chinese.svg"
            className="h-7"
          />
          <div>Chinese</div>
        </div>
      </div>
      <div className='flex flex-col gap-8 mt-10 m-8'>
       <div className="flex flex-col  lg:flex-row gap-4 ">
          <div className="shadow-lg drop-shadow-2xl border-2">
            <div>
              <img src="https://preview.colorlib.com/theme/lingua/images/course_1.jpg" />
            </div>
            <div>
              <h1 className="bold text-xl">Vocabulary </h1>
              Sarah Parker English Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Fusce enim nulla
            </div>
          </div>
          <div className="shadow-lg drop-shadow-2xl border-2">
            <div>
              <img src="https://preview.colorlib.com/theme/lingua/images/course_2.jpg" />
            </div>
            <div>
              <h1 className="bold text-xl">Vocabulary </h1>
              Sarah Parker English Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Fusce enim nulla
            </div>
          </div>
          <div className="shadow-lg drop-shadow-2xl border-2">
            <div>
              <img src="https://preview.colorlib.com/theme/lingua/images/course_3.jpg" />
            </div>
            <div>
              <h1 className="bold text-xl">Vocabulary</h1>
              Sarah Parker English Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Fusce enim nulla
            </div>
          </div>
          </div>
       <div className="flex flex-col  lg:flex-row gap-4 ">
          <div className="shadow-lg drop-shadow-2xl border-2">
            <div>
              <img src="https://preview.colorlib.com/theme/lingua/images/course_1.jpg" />
            </div>
            <div>
              <h1 className="bold text-xl">Vocabulary </h1>
              Sarah Parker English Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Fusce enim nulla
            </div>
          </div>
          <div className="shadow-lg drop-shadow-2xl border-2">
            <div>
              <img src="https://preview.colorlib.com/theme/lingua/images/course_2.jpg"  />
            </div>
            <div>
              <h1 className="bold text-xl">Vocabulary </h1>
              Sarah Parker English Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Fusce enim nulla
            </div>
          </div>
          <div className="shadow-lg drop-shadow-2xl border-2">
            <div>
              <img src="https://preview.colorlib.com/theme/lingua/images/course_3.jpg" />
            </div>
            <div>
              <h1 className="bold text-xl">Vocabulary</h1>
              Sarah Parker English Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Fusce enim nulla
            </div>
          </div>
      </div>
        </div>
        <End/>
    </div>
  )
}

export default Courses
