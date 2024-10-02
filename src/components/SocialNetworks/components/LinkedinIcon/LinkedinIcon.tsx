import './LinkedinIcon.css';

export const LinkedinIcon = () => {
    const linkedin = 'public/social/linkedin_logo.png';

    return (
        <a
            href="https://www.linkedin.com/in/samuel-romero-arbelo/"
            target="_blank"
            rel="noopener noreferrer">
            <img className="linkedinIcon" src={linkedin} alt="Link a mi perfil de LinkedIn" />
        </a>
    );
};
