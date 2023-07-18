import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {

  

  // filter , map

  const arr = [1,3,4,5,6,7,1];


  const a = 10
  const marks = 78;

  return (
    <div>About


      <h6>
        <Link to="/">Back to Home</Link>
      </h6>

      <h2>{a}</h2>

      <h2>{marks>33?"Your are pass":"You are fail."}</h2>

    <h6>{arr[0]}</h6>
    <h6>{arr[1]}</h6>
    <h4>==================</h4>
    {/* Each child in a list should have a unique "key" prop.
 */}
    {arr.map((a,i)=><h6 key={i}>{a}</h6>)}


    </div>
  )
}

export default About