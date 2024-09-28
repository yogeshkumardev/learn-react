import React from 'react'

const Card = (props) => {
  return (
    <div className='flex flex-col gap-3 w-[800px]'>
    
       <input type="text" onChange={(e) => {props.setName(e.target.value)}}  className='bg-gray-300 p-2 text-gray-900' />
       <p>Name variable state value is: {props.title} {props.name}</p>
    </div>
  )
}

export default Card