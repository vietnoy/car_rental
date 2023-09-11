import React, { useState } from 'react';
import { data } from '../../data.js';

const TypeOfCar = () => {
    const [index,setIndex] = useState('Audi A1 S-Line');
    const {rent,model,mark,year,doors,ac,transmission,fuel,image} = data.typesOfCar[index];
    const handleChange = (e) => {
        const key = e.target.value;
        console.log(key);
        setIndex(key);
    }
    return (
    <div className='typeOfCar'>
        <p className='typeOfCar-title'>Vehicle Models</p>
        <p className='typeOfCar-heading'>Our rental fleet</p>
        <p className='typeOfCar-info'>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>
        <div className='select-car-section'>
            <div className='select-column'>
                <button className='column' value='Audi A1 S-Line' key='0' onClick={handleChange}>Audi A1 S-Line</button>
                <button className='column' onClick={handleChange} value='VW Golf 6' key='1'>VW Golf 6</button>
                <button className='column' onClick={handleChange} value='Toyota Camry' key='2'>Toyota Camry</button>
                <button className='column' onClick={handleChange} value='BMW 320 ModernLine' key='3'>BMW 320 ModernLine</button>
                <button className='column' onClick={handleChange} value='Mercedes-Benz GLK' key='4'>Mercedes-Benz GLK</button> 
                <button className='column' onClick={handleChange} value='VW Passat CC' key='5'>VW Passat CC</button>
            </div>
            <div className='select-car-image'>
                <img src={image} alt='car logo'></img>
            </div>
            <div className='select-car-info'>
                <p id='first'><span className='price'>{rent}</span>/ rent per day</p>
                <p id='second'><span id='key'>Model</span><span id='line'></span><span id='value'>{model}</span></p>
                <p id='second'><span id='key'>Mark</span><span id='line'></span><span id='value'>{mark}</span></p>
                <p id='second'><span id='key'>Year</span><span id='line'></span><span id='value'>{year}</span></p>
                <p id='second'><span id='key'>Doors</span><span id='line'></span><span id='value'>{doors}</span></p>
                <p id='second'><span id='key'>AC</span><span id='line'></span><span id='value'>{ac}</span></p>
                <p id='second'><span id='key'>Transmission</span><span id='line'></span><span id='value'>{transmission}</span></p>
                <p id='second'><span id='key'>Fuel</span><span id='line'></span><span id='value'>{fuel}</span></p>
                <a id='reserve' href='#booking'>reserve now</a>
            </div>
        </div>
    </div>
  )
}

export default TypeOfCar
