import React from 'react'
import Navbar from './Header/Navbar'
import { data } from '../data';
import Register from './Header/Register';
import '../styles/HeaderStyle.css';
import Content from './Header/Content';
import BookACar from './Header/BookACar';

const Header = () => {
    const array = data.link;
    return (
        <div className='Header'>
            <div className='header'>
                <img src={data.logoLink} alt='logo'></img>
                <Navbar arrayOfLinks={array}/>
                <Register />
            </div>
            <Content />
            <BookACar />
        </div>
    )
}

export default Header
