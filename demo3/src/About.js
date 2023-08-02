import React, { useEffect } from 'react'
import {useNavigate, redirect, Link} from 'react-router-dom'

export default function About() {
    console.log('this will run every reload')
    // const navigate = useNavigate()
    // <Navigate to='/' replace={true}/>
    // redirect("/")


    // useEffect(()=>{

    //     navigate("/")
    // },[])


    useEffect(()=>{
        console.log('this will run on page load/mount')

        return ()=>{
            console.log('this will load on page unmount')
        }
    },[])

  return (
    <div>
            {/* <div>
      <p><Link to="/" >Home</Link></p>
      <p><Link to="/about" >About</Link></p>
    </div> */}
    About</div>
  )
}
