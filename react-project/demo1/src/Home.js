import React from 'react'
import {Link} from "react-router-dom"
import { Checkbox,  Radio, Switch } from 'antd';
const Home= () => {
  return (
    <div>


         <nav>
                    <h1>
                        {/* <a href="/about">About</a> */}
                        <Link to="/form">Form</Link>
                    </h1>

        <Radio >Radio</Radio>
        <Checkbox>CHeck</Checkbox>
        <Switch>Swidth</Switch>
                </nav>
    </div>
  )
}

export default App