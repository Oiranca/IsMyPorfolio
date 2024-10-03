import '../../../../../../styles/Navbar/SocialNetworks/GithubIcon/GithubIcon.css';

export const GithubIcon = () => {
    const github = 'public/social/github_logo_black.png';

    return (
        <a href="https://github.com/Oiranca" target="_blank" rel="noopener noreferrer">
            <img className="githubIcon" src={github} alt="Link a mi perfil de X anterior twitter" />
        </a>
    );
};
