import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // useEffect(()=>{
    // fetch('https://api.github.com/users/dexfade')
    // .then((r)=>r.json())
    // .then((r)=> {
    //     setData(r)
    // })
    // }, [])
    return (
    <div className='flex items-center text-center justify-center gap-4 p-4 text-white bg-neutral-600 '>Github Followers: {data.followers}
    <img className='w-10' src={data.avatar_url} alt="Git Pfp" /></div>
    )
}

export default Github

export const githubInfo = async() =>{
    const response = await fetch('https://api.github.com/users/dexfade')
    return response.json()
}