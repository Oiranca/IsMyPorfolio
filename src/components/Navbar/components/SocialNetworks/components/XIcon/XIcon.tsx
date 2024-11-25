import '../../../../../../styles/Navbar/SocialNetworks/XIcon/XIcon.css';
import XIconImage from './assets/X_logo.png';

export const XIcon = () => {
    return (
        <a href="https://x.com/Oiranca" target="_blank" rel="noopener noreferrer">
            <img className="xIcon" src={XIconImage} alt="Link a mi perfil de X anterior twitter" />
        </a>
    );
};
