import '../../styles/Navbar/Navbar.css';
import { MobileMenu } from './components/MobileMenu/MobileMenu.tsx';
import { SocialNetworks } from '../SocialNetworks/SocialNetworks.tsx';

export const Navbar = () => {
    return (
        <nav className="navbar_container">
            <section className="section_menu_desktop">
                <ul className="list_menu">
                    <li className="item_menu">
                        <a href="#about">Sobre mí</a>
                    </li>
                    <li className="item_menu">
                        <a href="#experience">Experiencia</a>
                    </li>
                    <li className="item_menu">
                        <a href="#projects">Proyectos</a>
                    </li>
                    <li className="item_menu">
                        <a href="#contact">Contacto</a>
                    </li>
                </ul>
            </section>
            <section className="section_menu_desktop">
                <SocialNetworks />
            </section>
            <MobileMenu />
        </nav>
    );
};
