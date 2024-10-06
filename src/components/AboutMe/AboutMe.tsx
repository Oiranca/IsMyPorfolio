import '../../styles/AboutMe/AboutMe.css';

export const AboutMe = () => {
    const avatar = 'avatar/Avatar.jpeg';
    return (
        <div className="AboutMe">
            <img
                className="avatar"
                src={avatar}
                alt="Imagen creada por Bing de Microsoft donde se ve un chico tecleando con un fondo donde se ve la playa"
            />
            <h1 className="title ">Sobre mí</h1>
            <section className="body-about-me">
                <p className="indent-8 p-2">
                    Soy una persona curiosa, que le gusta estar siempre investigando,
                    autodidacta..., pero tengo que admitir que donde esté un buen equipo en el que
                    todos aprendamos, me siento muy cómodo.
                </p>
                <p className="p-2">
                    Empecé en este mundillo cuando tenía unos 21 años, durante mis estudios en el
                    Ciclo Superior en Telecomunicaciones e Informática, donde ví C++, pero por
                    capricho de la vida, mi camino no fue el de la programación, aunque siempre se
                    quedó dentro de mí el no poder dedicarme a ello.
                </p>
                <p className="p-2">
                    Terminé un Ciclo Superior de Desarrollo de Aplicaciones Multiplataformas, el
                    cual se ha centrado en adquirir conocimientos en lenguaje como Java, en base de
                    datos SQL o framework como Android, al terminar he podido realizar las prácticas
                    de empresa en Lean Mind .
                </p>
                <p className="p-2">
                    Para introducirme en Frontend he realizado varios cursos y un bootcamp donde he
                    podido adquirir conocimientos de JavaScript, TypeScript, Angular, HTML5, CSS3 y
                    React.
                </p>
            </section>
        </div>
    );
};
