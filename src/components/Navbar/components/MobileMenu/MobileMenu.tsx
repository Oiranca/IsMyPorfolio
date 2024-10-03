import { useState } from 'react';
import { IconMenu } from './components/IconMenu/IconMenu.tsx';
import { SideMenu } from './components/SideMenu/SideMenu.tsx';
import '../../../../styles/Navbar/MobileMenu/MobileMenu.css';

export const MobileMenu = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const isOpen = () => {
        setMenuIsOpen(!menuIsOpen);
    };

    return (
        <nav className="mobile_menu_container">
            <section className="header_menu_mobile">
                <h2>Software Developer</h2>
                <IconMenu openMenu={isOpen} />
            </section>
            <SideMenu isMenuOpen={menuIsOpen} />
        </nav>
    );
};
