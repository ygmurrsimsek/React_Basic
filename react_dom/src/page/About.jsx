import React from 'react'
import { Link, Outlet } from 'react-router-dom'
function About() {
  return (
    <div>
        About
        <hr></hr>
        <Link to="employee">İşçiler İçin</Link> 
        <Link to="company">Çalışanlar İçin</Link>
        <Outlet/>
    </div>
  )
}

export default About
