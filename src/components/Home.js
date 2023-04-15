import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import { AiOutlineArrowRight } from "react-icons/ai";


function home() {
  return (
    <div className='home'>
    <div className='home-title'>
    <h1 >INDIA'S COVID-19 DATA</h1>
    <h4>Coronavirus Covid-19, Case Tracker: Track India's Coronavirus Cases</h4>
    <Link to='/state'><button className='home-button'>Get Data</button></Link>
    </div>
    </div>
  )
}

export default home