import '../../styles/Experience/Experience.css';
import { experience } from '../../data/experience.ts';

export const Experience = () => {
    const icon = 'experience/experience.png';
    return (
        <div className="Experience">
            <header className="experience-header">
                <img
                    className="experience-icon"
                    src={icon}
                    alt="Imagen de una ventana del editor de código con unos y ceros"
                />
                <h1 className="title ">Experiencia</h1>

            </header>
            <article className="experience-body">
                {experience.map((item) => (
                    <section className="experience-item" key={item.title}>
                        <header>
                            <img src={item.logo} alt={`Logo de ${item.title}`} />
                            <h3 className="title-item">
                                {item.title}
                            </h3>
                        </header>
                        <section>
                            <p className="description-item">
                                {item.description}
                            </p>
                        </section>
                        <footer>
                            <ul className="list-technologies">
                                {item.technologies.map((technology) => (
                                    <li key={technology} className="technology-item">
                                        {technology}
                                    </li>
                                ))}

                            </ul>
                        </footer>
                    </section>
                ))}
            </article>
        </div>
    );
};
