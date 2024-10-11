type Experience =
    {
        logo: string;
        title: string;
        description: string;
        technologies: string[];
    }[];


export const experience: Experience = [{
    logo: 'public/experience/auj-logo.png',
    title: '#AdoptaUnJunior',
    description: 'Desarrollador Frontend voluntario en la Asociación AdoptaUnJunior',
    technologies: ['React', 'Next.js', 'TypeScript', 'TailwindCSS'],
}, {
    logo: 'public/experience/characters-vault-logo.png',
    title: 'Characters Vault',
    description: 'Sistema de gestión de personajes basado en la nube para juegos de rol de mesa. Se integra con Foundry VTT',
    technologies: ['React', 'Supabase', 'TypeScript', 'Material-UI', 'Jest'],
}, {
    logo: 'public/experience/logo_ecommerce_white.png',
    title: 'Ecommerce',
    description: 'Es un backend realizado con Nodejs y Express en donde simulamos una tienda donde podremos comprar tanto de manera Online y luego ir a recoger a la tienda como, de manera presencial.',
    technologies: ['Nodejs', 'Expressjs', 'Mongoose'],
}, {
    logo: 'public/experience/logo_Moviesforworld_white.png',
    title: 'Movies for world',
    description: 'La aplicación nos permitirá buscar y mostrar títulos, todo esto consumiendo la API de The Movie Database',
    technologies: ['React', 'Redux', 'Bootstrap', 'JavaScript', 'Sass'],
},
    {
        logo: 'public/experience/logo_Multiply_white.png',
        title: 'Multiply',
        description: 'Aplicación para aprender a multiplicar, usando arrastrar y soltar',
        technologies: ['React', 'TypeScript', 'Css'],
    },
    {
        logo: 'public/experience/logo_My_Whatsapp_Clone.png',
        title: 'My Whatsapp Clone',
        description: 'Web estática que simula la aplicación de mensajería WhatsApp',
        technologies: ['React', 'JavaScript', 'Sass'],
    },


];