import '../../styles/AboutMe/AboutMe.css';
export const AboutMe = () => {
    const avatar = 'avatar/Avatar.jpeg';
    return (
        <div
            className="AboutMe"
            // className='grid grid-flow-row auto-rows-max justify-items-center content-evenly p-2 text-black text-lg md:text-xl lg:grid-cols-aboutMe-lg 2xl:w-11/12 3xl:w-2/3 '
        >
            <img
                className="avatar order-1 lg:order-2 rounded-full w-40 h-40 md:w-18 md:h-18 lg:rounded-[4rem] lg:mt-6 lg:w-auto lg:h-auto lg:max-w-[300px] xl:mt-2 p-2"
                src={avatar}
                alt="Imagen creada por Bing de Microsoft donde se ve un chico tecleando con un fondo donde se ve la playa"
            />
            <h1 className="title order-2 text-4xl font-bold p-2 lg:order-1 lg:col-span-full lg:text-6xl">
                Sobre mí
            </h1>
            <section className="order-3 flex flex-col font-semibold text-md text-justify p-1">
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
