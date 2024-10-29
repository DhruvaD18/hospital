import React from 'react'

const HospitalCard = ({props}) => {

  const {hospitalName,location,email,contact,specialties} = props

  return (
    <div className='w-fit h-96 shadow-md p-3 text-center font-serif rounded-lg hover:shadow-2xl flex items-center justify-between flex-col'>
      <img src='https://i.ibb.co/yd7H2F6/Screenshot-2024-10-30-040402.png' alt='organisation' className='h-1/3 w-full my-2 rounded-md'/>
      <p className='text-2xl font-semibold font-mono capitalize'>{hospitalName}</p>
      <p className='text-lg capitalize'><span className='font-bold underline'>location</span>:{location}</p>
      <p className='text-lg capitalize'><span className='font-bold underline'>Email</span>:{email}</p>
      <p className='text-lg capitalize font-mono'><span className='font-serif font-bold underline'>Contact No</span>:{contact}</p>
      <p className='text-lg capitalize'><span className='font-bold underline'>Specialities</span>:{specialties.join(", ")}</p>
    </div>
  )
}

export default HospitalCard
