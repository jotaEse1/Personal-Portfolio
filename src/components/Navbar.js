import React from 'react';
import {motion} from 'framer-motion';
import { navbarVariant } from '../animations/variants';
import {AiOutlineMenu} from 'react-icons/ai'
import {VscChromeClose} from 'react-icons/vsc'

const Navbar = ({menuVisible, setMenuVisible}) => {
    return (
        <header className='header'>
            <motion.nav 
                className='navbar'
                variants={navbarVariant} 
            >
                <button
                    onClick={() => setMenuVisible(prev => !prev)}
                >
                    {!menuVisible? <AiOutlineMenu /> : <VscChromeClose />}
                </button>
            </motion.nav>
        </header>
    );
};

export default Navbar;