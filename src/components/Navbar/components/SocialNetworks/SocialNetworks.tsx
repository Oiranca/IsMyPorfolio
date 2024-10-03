import { XIcon } from './components/XIcon/XIcon.tsx';
import { LinkedinIcon } from './components/LinkedinIcon/LinkedinIcon.tsx';
import { GithubIcon } from './components/GithubIcon/GithubIcon.tsx';
import '../../../../styles/Navbar/SocialNetworks/SocialNetworks.css';
export const SocialNetworks = () => {
    return (
        <section className="socialNetworks">
            <XIcon />
            <LinkedinIcon />
            <GithubIcon />
        </section>
    );
};
