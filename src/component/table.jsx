import React, { useEffect,useState } from 'react'
import Switches from './switches'
import axios from '../axios'
import {Link} from 'react-router-dom'


function Table() {
 
  const [province,setprovince]= useState([])

    const getData=()=>{
 try {
    axios.get('/province/list').then(res=>{
        console.log(res)
        setprovince([...res.data.data.data])
    }).catch(error=>console.log(error))
 } catch (error) {
    console.log(error)
 }
    }

    useEffect(()=>{
        getData()
    },[])
  return (
    <div>
        <div >
            <h1 className='text-xl font-bold '>The Rigestration Table</h1>
        </div>
        <div className='m-2'>
         <Switches/>
        </div>
        <div>

        <table className='border m-2 w-fit'>
            
                <tr className='border p-2'>
                  <th className='border p-2'>
                  Name
                  </th>
                  <th className='border p-2'>
                  Category_name
                  </th>
                  <th className='border p-2'>
                  Course
                  </th>
                  <th className='border p-2'>
                  Date
                  </th>
                  <th className='border p-2'>
                  Gender
                  </th>
                  <th className='border p-2'>
                  Level
                  </th>
                  <th className='border p-2'>
                  Shift
                  </th>
                  <th className='border p-2'>
                  Source of Information
                  </th>
                  <th className='border p-2'>
                  Stage
                  </th>
                  <th className='border p-2'>
                  Address
                  </th>
                  <th className='border p-2'>
                  Contact No
                  </th>
                   
                  <th className='border p-2'>
                  Discount
                  </th>
                   
                  <th className='border p-2'>
                  Email
                  </th>
                   
                  <th className='border p-2'>
                  Guardian Name
                  </th>
                   
                  <th className='border p-2'>
                  ID
                  </th>
                   
                  <th className='border p-2'>
                  Image
                  </th>
                   
                  <th className='border p-2'>
                  Referral Contact No
                  </th>
                   
                  <th className='border p-2'>
                  Referred By
                  </th>
                   
                  <th className='border p-2'>
                  School Course Taken
                  </th>
                   
                  <th className='border p-2'>
                  School Name
                  </th>
                   
                  <th className=' border p-2'>
                  Status
                  </th>
                   
                </tr>
                
            
        </table>
        <div className=''>
           <div className='bg-red-200 flex gap-6 border-gray-300 m-2'>
            
               {

          province.map((val,i)=>{
            return <Link to={{
              pathname:`/${val.province_id}`,
            }} state={val.province_id}>
            <div className='m-3 border-spacing-1 border-2 hover:scale-105 duration-200 ease-in-out delay-200 bg-slate-400'><div className='p-2'><p>{val.name}</p><p>{val.alt_name}</p></div>
            </div>
            </Link> })
            }

           </div>
            
        </div>
        <div>
          
        </div>
        </div>
      
    </div>
  )
}

export default Table
