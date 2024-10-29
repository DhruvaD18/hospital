import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import HospitalCard from './HospitalCard';
import { Link } from 'react-router-dom';

const Hospitals = () => {

  const user = useSelector((state) => state.user.value);
  const [allData,setallData] = useState(null)
  
  useEffect(()=>{
    const fetchData = async()=>{
        const response = await fetch('http://localhost:5000/api/hospitals-data')
        const data = await response.json()
        console.log(data.data)
        setallData(data.data)
    }

    fetchData()
  },[]);

  if(allData==null){
    return <div className='font-bold text-4xl'>Loading</div>
  }

  return (
    <div>
      {user && <div className='h-fit w-full flex gap-16 items-center flex-wrap justify-center'>
        {allData.map((data,idx)=>(<HospitalCard key={data._id} props={data} />))}
      </div>}
      {!user && <div className='text-2xl font-bold m-10 capitalize'>
        <p>please Login and continue</p>
        <Link to={'/login'} className='hover:underline text-blue-400 hover:text-blue-700'>Click here!!</Link>
      </div>}
    </div>
    
  )
}

export default Hospitals
