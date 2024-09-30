import { IconMenu } from './components/IconMenu/IconMenu.tsx';
import '../../../../styles/Navbar/MobileMenu.css';
import { SideMenu } from './components/SideMenu/SideMenu.tsx';
import { useState } from 'react';

export const MobileMenu = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const isOpen = () => {
        setMenuIsOpen(!menuIsOpen);
    };

    return (
        <nav className="mobile_menu_container">
            <IconMenu openMenu={isOpen} />
            <SideMenu isMenuOpen={menuIsOpen} />
        </nav>
    );
};
