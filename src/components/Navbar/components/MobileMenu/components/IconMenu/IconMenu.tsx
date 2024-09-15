import '../../../../../../styles/Navbar/IconMenu.css';
import { MouseEvent } from 'react';

interface IconMenuProps {
    openMenu: () => void;
}

export const IconMenu = ({ openMenu }: IconMenuProps) => {
    const menuAction = (event: MouseEvent<HTMLElement>) => {
        event.currentTarget.classList.toggle('icon_menu_container_opened');
        openMenu();
    };

    return (
        <nav className="icon_menu_container_closed" onClick={menuAction}>
            <section className="icon_line_first"></section>
            <section className="icon_line_second"></section>
            <section className="icon_line_third"></section>
        </nav>
    );
};
