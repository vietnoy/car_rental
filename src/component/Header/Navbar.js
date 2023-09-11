import React from 'react'

const Navbar = ({arrayOfLinks}) => {
    const arrayOfJSX = arrayOfLinks.map((link) => {

        const ref = `/${link}`;
        return (
         <a href={ref} id='link'>{link}</a> 
        )
    });
    return (
    <div className='navbar'>
        {arrayOfJSX}
    </div>
    )
}

export default Navbar
