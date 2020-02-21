import React from 'react';
import Toolbar from '../../components/Toolbar';
import Footer from '../../components/Footer';
import './Layout.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/storeConfig';

interface Props {
    children: JSX.Element[] | JSX.Element;
}

const Layout: React.FC<Props> = ({children}) => {

    const email = useSelector((state: RootState) => state.auth.email)
    
    return (
        <div className='layout'>
            <header className='layout__header'>
                <Toolbar email = {email}/>
            </header>
            <main className='layout__body'>
                {children}
            </main>
            <footer className='layout__footer'>
                <Footer />
            </footer>
        </div>
    )
}

export default Layout
