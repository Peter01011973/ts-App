import React from 'react';
import Navmenu from '../Toolbar/Navmenu';
import './Toolbar.css';

interface Props {
    email: string | null
}

const Toolbar: React.FC<Props> = ({email}) => {
    return (
        <header className='toolbar'>
            <div className='toolbar__container'>
                <div className='toolbar__container__hammenu'></div>
                <div className='toolbar__container__logo'>First TS</div>
                <div className='toolbar__container__navmenu'>
                    <Navmenu email = {email}/>
                </div>
            </div>
        </header>
    )
}

export default Toolbar
