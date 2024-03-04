import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { id } = useParams();
    return (
    <>
        <div className='text-center text-lg font-bold shadow-lg p-4 bg-slate-400 text-white'>UserID: {id}</div>
    </>
  )
}

export default User