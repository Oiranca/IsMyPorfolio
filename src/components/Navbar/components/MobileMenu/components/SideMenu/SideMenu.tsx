import '../../../../../../styles/Navbar/SideMenu.css';
import { useEffect, useState } from 'react';

interface SideMenuProps {
    isMenuOpen: boolean;
}

export const SideMenu = ({ isMenuOpen }: SideMenuProps) => {
    const [menuIsOpen, setMenuIsOpen] = useState('side_menu_container_closed');
    useEffect(() => {
        setMenuIsOpen(isMenuOpen ? 'side_menu_container_opened' : 'side_menu_container_closed');
    }, [isMenuOpen]);
    return (
        <nav className={`${menuIsOpen}`}>
            <ul className="side_list_menu">
                <li className="side_item_menu">
                    <a href="#about">Sobre mí</a>
                </li>
                <li className="side_item_menu">
                    <a href="#experience">Experiencia</a>
                </li>
                <li className="side_item_menu">
                    <a href="#projects">Proyectos</a>
                </li>
                <li className="side_item_menu">
                    <a href="#contact">Contacto</a>
                </li>
            </ul>
        </nav>
    );
};
