import React from 'react'

function End () {
  return (
    <div>
      <div className="lg:w-full  lg:h-fit bg-black text-white">
          <div className="lg:flex lg:flex-row gap-4 flex-col m-4 lg:m-0">
            <div className="lg:m-10  my-2">
              <h1 className="text-2xl ">Lingua</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              <div className="mt-4">
                <p className="lg:p-2 text-2xl b">Subscribe</p>
                <input type="text" className="p-2 outline-none text-black " />
              </div>
            </div>
            <div className=" lg:m-10 my-2">
              <h1 className="text-xl ">About us</h1>
              <div>
                <ul className="cursor-pointer">
                  <li className="hover:text-orange-400">Courses </li>
                  <li className="hover:text-orange-400">Team </li>
                  <li className="hover:text-orange-400">Brand Guidelines</li>
                  <li className="hover:text-orange-400">Jobs </li>
                  <li className="hover:text-orange-400">Advertise with us </li>
                  <li className="hover:text-orange-400">Press </li>
                  <li className="hover:text-orange-400">Contact us </li>
                </ul>
              </div>
            </div>
            <div className=" lg:m-10 my-2">
              <h1 className="text-xl">Help & Support</h1>
              <div className=''>
                <ul className="cursor-pointer">
                  <li className="hover:text-orange-400">Discussions </li>
                  <li className="hover:text-orange-400">Troubleshooting </li>
                  <li className="hover:text-orange-400">Duolingo FAQs</li>
                  <li className="hover:text-orange-400">Schools FAQs</li>
                  <li className="hover:text-orange-400">
                    Duolingo English Test FAQs{" "}
                  </li>
                  <li className="hover:text-orange-400">Status </li>
                </ul>
              </div>
            </div>
            <div className=" lg:m-10 my-2  hidden lg:flex lg:flex-col">
              <h1 className="text-xl">Privacy & Terms</h1>
              <div>
                <ul className="cursor-pointer">
                  <li className="hover:text-orange-400">
                    Community Guidelines
                  </li>
                  <li className="hover:text-orange-400">Terms </li>
                  <li className="hover:text-orange-400">Brand Guidelines</li>
                  <li className="hover:text-orange-400">Privacy</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
    </div>
  )
}

export default End
