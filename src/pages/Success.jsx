import React, { useEffect, useState } from 'react'
import { PacmanLoader } from 'react-spinners'

const Success = () => {
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  },[])
  return (
    <div className='flex flex-col items-center justify-center h-screen'>

      {loading ? 
      (<PacmanLoader color="#36d7b7" />) : (<>
        <h2 className='text-3xl font-semibold mb-4 text-center'>order Successfull</h2>
        <p>your order has been placed Successfully</p>
      </>) 
      }

    </div>
  )
}

export default Success