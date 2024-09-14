import '../../styles/Navbar/Navbar.css';

export const Navbar = () => {
    return (
        <nav className="navbar_container">
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
        </nav>
    );
};
