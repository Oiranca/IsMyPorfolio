import '../../styles/Experience/Experience.css';

export const Experience = () => {
    const icon = 'experience/experience.png';
    return (
        <div className="Experience">
            <header className='experience-header'>
                <img
                    className="experience-icon"
                    src={icon}
                    alt="Imagen de una ventana del editor de código con unos y ceros"
                />
                <h1 className="title ">Experiencia</h1>

            </header>
            <article className="experience-body">
                <section className='experience-item'>
                    <img src='public/experience/auj-logo.png' alt='Logo de la Aosiciaón Adoptaun Un Junior'/>
                    <h3 className='title-item'>
                        #AdoptaUnJunior
                    </h3>
                </section>
            </article>
        </div>
    );
};
