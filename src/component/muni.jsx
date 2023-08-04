import React from 'react'
import axios from '../axios';
import { useState,useEffect } from 'react';
import {useParams} from 'react-router-dom'
import { data } from 'autoprefixer';

function Muni() {
    const [Munici,setMunici]= useState([])
    const parms = useParams()
    console.log(parms)
    const getData=()=>{
        try{
            axios.get(`district/${parms.bd}/municipalities`).then(res=>{
                console.log(res)
                setMunici([...res.data.data])
                
            })
            .catch(error=>console.log(error))
        }
        catch(error){
            console.log(error)
        }
        
    }
    useEffect (
        ()=>{
            getData()
        },[parms]
    
    )

    return (
        <div className='grid grid-cols-6 gap-10 h-screen bg-slate-400'>
          {
             Munici.map((val,i)=>
               
                {
                   return <div className=' border h-44 m-2 '>
                 <h1 className=' bg-red-200 w-full h-full flex justify-center items-center  hover:scale-105 duration-200 ease-in-out delay-200'>
                 {val.name}
                   </h1>
             </div>
             }
             )
                   
             }
        </div>
      )
    }
    


export default Muni;
