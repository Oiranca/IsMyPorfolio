import '../../../../../../styles/Navbar/SocialNetworks/GithubIcon/GithubIcon.css';
import github from './assets/github_logo_black.png';

export const GithubIcon = () => {
    return (
        <a href="https://github.com/Oiranca" target="_blank" rel="noopener noreferrer">
            <img className="githubIcon" src={github} alt="Link a mi perfil de X anterior twitter" />
        </a>
    );
};
