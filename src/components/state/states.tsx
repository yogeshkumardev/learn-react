import React, { useEffect, useState } from 'react'

const States = () => {
    const [name, setName] = useState("yogesh")

  useEffect(() => {
    setName("gaurav")
  }, [])

    

  return (
    <div className='w-full h-1/4 flex flex-col items-center justify-center '>
        <div className='p-4'>
                {name}
        </div>
        <div>
           
        </div>
    </div>
  )
}

export default States