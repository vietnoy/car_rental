import React from 'react';

const Content = () => {
  return (
    <div className='content'>
        <div className='left'>
            <p id='title'>Plan your trip now</p>
            <p className='title'>Save <span>big</span> with our car rental</p>
            <p id='small'>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
            <a href='#booking' id='book'>Book Ride</a>
            <a href='#learn' id='learn'>Learn More</a>
        </div>
        <img src='https://car-rental-main.netlify.app/static/media/main-car.9b30faa59387879fa060.png' alt='car'></img>
    </div>
  )
}

export default Content
