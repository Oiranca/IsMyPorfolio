import { IconMenu } from './components/IconMenu/IconMenu.tsx';
import '../../../../styles/Navbar/MobileMenu.css';

export const MobileMenu = () => {
    return (
        <nav className="mobile_menu_container">
            <IconMenu />
        </nav>
    );
};
