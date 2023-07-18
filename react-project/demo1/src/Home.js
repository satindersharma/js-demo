import React from 'react'
import {Link} from "react-router-dom"
const Home = () => {
  return (
    <div>




                <nav>
                    <h1>
                        {/* <a href="/about">About</a> */}
                        <Link to="/about">About</Link>
                    </h1>
                </nav>
    </div>
  )
}

export default Home