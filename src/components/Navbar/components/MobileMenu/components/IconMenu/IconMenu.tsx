import '../../../../../../styles/Navbar/IconMenu.css';
import { MouseEvent } from 'react';

export const IconMenu = () => {
    const menuAction = (event: MouseEvent<HTMLElement>) => {
        console.log(event.currentTarget.classList.toggle('icon_menu_container_opened'));
    };

    return (
        <nav className="icon_menu_container_closed" onClick={menuAction}>
            <section className="icon_line_first"></section>
            <section className="icon_line_second"></section>
            <section className="icon_line_third"></section>
        </nav>
    );
};
