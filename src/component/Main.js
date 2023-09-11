import React from 'react'
import Service from './Main/Service'
import '../styles/MainStyle.css'
import TypeOfCar from './Main/TypeOfCar'

const Main = () => {
  return (
    <div className='Main'>
      <Service />
      <TypeOfCar />
    </div>
  )
}
export default Main
