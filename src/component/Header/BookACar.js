import React from 'react'

const InputType = ({info, type}) => (
    <div className='input'>
        <p>{info}</p>
        <input type={type} id='input'></input>
    </div>
);

const SelectType = ({info, options}) => {
    const optionJSX = options.map((option,index) => {
        if(!index) {
            return (
                <option selected disabled>{option}</option>
            );
        }
        else {
            return (
                <option>{option}</option>
            );
        }
    } );
    return (
        <div className='input'>
            <p className="capitalize">{info}</p>
            <select id='input'>
                {optionJSX}
            </select>
        </div>
    );
}

const BookACar = () => {
  return (
    <div className='book_a_car' id="booking">
      <p className='name'>Book a car</p>
      <div className='inputs'>
        <SelectType info={'Select your car types'} options={['Select your car types', 'Audi', 'Toyota Supra', 'Tesla', 'Lambo', 'Mercedes']} />
        <SelectType info={'Pick-up'} options={['Select pick up location', 'Hai Phong', 'Ha Noi', 'Sai Gon', 'Hung Yen']} />
        <SelectType info={'Drop-off'} options={['Select drop off location', 'Hai Phong', 'Ha Noi', 'Sai Gon', 'Hung Yen']} />
        <InputType info={'Pick-up'} type={"date"} />
        <InputType info={'Drop-off'} type={"date"} />
        <button className='input'>Search</button>
      </div>
    </div>
  )
};

export default BookACar
