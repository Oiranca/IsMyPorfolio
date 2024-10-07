import '../../styles/Experience/Experience.css';

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
                <section className="experience-item">
                    <header>
                        <img src="public/experience/auj-logo.png" alt="Logo de la Asociación Adoptaun Un Junior" />
                        <h3 className="title-item">
                            #AdoptaUnJunior
                        </h3>
                    </header>
                    <section>
                        <p className="description-item">
                            Desarrollador Frontend voluntario en la Asociación AdoptaUnJunior </p>
                    </section>
                    <footer>
                        <ul className="list-technologies">
                            <li className='technologies-item'>
                                React
                            </li>
                            <li className='technologies-item'>
                                Next.js
                            </li>
                            <li className='technologies-item'>
                                TypeScript
                            </li>
                            <li className='technologies-item'>
                                TailwindCSS
                            </li>
                        </ul>
                    </footer>
                </section>
            </article>
        </div>
    );
};
