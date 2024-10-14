import '../../../../../../styles/Navbar/SocialNetworks/XIcon/XIcon.css';

export const XIcon = () => {
    const x = 'social/X_logo.png';

    return (
        <a href="https://x.com/Oiranca" target="_blank" rel="noopener noreferrer">
            <img className="xIcon" src={x} alt="Link a mi perfil de X anterior twitter" />
        </a>
    );
};
