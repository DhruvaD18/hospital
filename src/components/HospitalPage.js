import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const HospitalPage = () => {

  const [data,setData] = useState(null)
  const {emailId} = useParams()

  useEffect(()=>{
    console.log(emailId)
    const fetchData = async() =>{
        const response = await fetch(`http://localhost:5000/api/single-hospital-data?val=${emailId}`)
        const val = await response.json()
        console.log(val.data)
        setData(val.data)
    }

    fetchData();
  },[])

  if(data == null){
    return <div className='font-bold text-4xl'>Loading</div>
  }

  return (
    <div className='h-screen w-screen bg-slate-100 flex flex-col items-center justify-around p-10 text-2xl'>
      <img src='' alt='hospitalImage' className='w-11/12 h-1/3 rounded-lg bg-slate-300' />
      <div className='font-bold text-4xl uppercase'>{data.hospitalName}</div>
      <div><span className='font-semibold underline underline-offset-2'>Location</span>:{data.location}</div>
      <div><span className='font-semibold underline underline-offset-2'>Email</span>:{data.email}</div>
      <div><span className='font-semibold underline underline-offset-2'>Contact Details</span>:{data.contact}</div>
      {<div><span className='font-semibold underline underline-offset-2'>Specialities</span>:{data.specialties.join(', ')}</div>}
      <Link to={''}>Navigation</Link>
    </div>
  )
}

export default HospitalPage
