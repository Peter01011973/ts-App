import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navmenu.css';

interface Props {
    email: string | null
}

const Navmenu: React.FC<Props> = ({email}) => {

    const signIn_signUp = (
        <>
            <li className='navmenu__item'><NavLink className='navmenu__link' to='/login' activeClassName='active'>Sign In</NavLink></li>
            <li className='navmenu__item'><NavLink className='navmenu__link' to='/register' activeClassName='active'>Sign Up</NavLink></li>
        </>
    )

    const logout = <li className='navmenu__item'><NavLink className='navmenu__link' to='/logout' activeClassName='active'>Logout</NavLink></li>
    
    console.log('email', email);
        

    return (
        <div className='navmenu'>
            <ul className='navmenu__items'>
                <li className='navmenu__item'><NavLink className='navmenu__link' exact to='/' activeClassName='active'>About</NavLink></li>
                <li className='navmenu__item'><NavLink className='navmenu__link' to='/posts' activeClassName='active'>Posts</NavLink></li>
                {email ? logout : signIn_signUp}
            </ul>   
        </div>
    )
}

export default Navmenu
