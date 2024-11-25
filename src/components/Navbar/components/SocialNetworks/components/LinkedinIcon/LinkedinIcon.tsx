import '../../../../../../styles/Navbar/SocialNetworks/LinkedinIcon/LinkedinIcon.css';
import linkedin from './assets/linkedin_logo.png';

export const LinkedinIcon = () => {
    return (
        <a
            href="https://www.linkedin.com/in/samuel-romero-arbelo/"
            target="_blank"
            rel="noopener noreferrer">
            <img className="linkedinIcon" src={linkedin} alt="Link a mi perfil de LinkedIn" />
        </a>
    );
};
