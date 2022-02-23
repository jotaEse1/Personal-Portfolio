import React from 'react';
import './Menu.css'
import Navbar from './Navbar';
import {motion} from 'framer-motion';
import { menuVariant, menuOptionsVariant } from '../animations/variants';

const Menu = ({menuVisible, setMenuVisible}) => {
    return (
        <motion.div 
            className='menu'
            initial='hidden'
            animate='visible'
            exit='exit'
            variants={menuVariant}
        >
            <Navbar menuVisible={menuVisible} setMenuVisible={setMenuVisible}/>
            <div className='menu-options'>
                <motion.a 
                    href='#home'
                    onClick={() => setMenuVisible(prev =>!prev)}
                    variants={menuOptionsVariant}
                >Home</motion.a>
                <motion.a 
                    href='#about-me'
                    onClick={() => setMenuVisible(prev =>!prev)}
                    variants={menuOptionsVariant}
                >About me</motion.a>
                <motion.a 
                    href='#projects'
                    onClick={() => setMenuVisible(prev =>!prev)}
                    variants={menuOptionsVariant}
                >My Projects</motion.a>
                <motion.a 
                    href='#contact'
                    onClick={() => setMenuVisible(prev =>!prev)}
                    variants={menuOptionsVariant}
                >Contact</motion.a>
            </div>
        </motion.div>
    );
};

export default Menu;