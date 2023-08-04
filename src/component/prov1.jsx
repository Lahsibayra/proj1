import React from 'react'
import axios from '../axios';
import { useState,useEffect } from 'react';
import {useParams,Link} from 'react-router-dom'

function Prov1() {
    const [province1,setprovince1]= useState([])
    const params=useParams();
    console.log(params)

    const getData=()=>{
 try {
    axios.get(`/province/${params.id}/district`).then(res=>{
        console.log(res)
        setprovince1([...res.data.data])
    }).catch(error=>console.log(error))
 } catch (error) {
    console.log(error)
 }
    }

    useEffect(()=>{
        getData()
    },[params])
  return (
    <div className='grid grid-cols-6 gap-10 bg-slate-400'>
      {
         province1.map((val,i)=>
           
            {
               console.log(val)
               return < Link to={{
                  pathname:`/dis/${val.district_id}`,
               }} state={val.district_id} >
               <div className=' border h-44 m-2'>
             <h1 className=' bg-red-200 w-full h-full flex justify-center items-center  hover:scale-105 duration-200 ease-in-out delay-200'>
             {val.name}
               </h1>
         </div>
         </Link>
         }
         )
               
         }
    </div>
  )
}

export default Prov1;
