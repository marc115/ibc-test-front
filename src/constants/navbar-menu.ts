interface SidebarItem {
    name: string,
    path: string,
    children?: SidebarItem[]
}

export const navbarItems: SidebarItem[] = [
    {
        name: 'Programa',
        path: 'guide', 
    },
    {
        name: 'Laboratorios',
        path: '#',
        children: [
            {
                name: 'Web prácticas',
                path: "#"
            },
            {
                name: 'Prácticas',
                path: "#"
            },
            {
                name: 'Vídeo',
                path: "#"
            },
        ],
    },
    {
        name: 'Simuladores',
        path: '#',
        children: [
            {
                name: 'Gramática',
                path: '#'
            },
            {
                name: 'Comprensión lectora',
                path: '#'
            },
            {
                name: 'Comprensión auditiva',
                path: '#'
            },
        ]
    },
    {
        name: 'Tu Progreso',
        path: '#',
        children: [
            {
                name: 'Exámenes',
                path: '#'
            },
            {
                name: 'W-Reporting',
                path: '#'
            },
        ]
    },
    {
        name: 'Optimus',
        path: '#'
    },
    {
        name: 'Conversaciones interactivas',
        path: '#'
    },
    {
        name: 'Consultas',
        path: '#',
        children: [
            {
                name: 'Buzón de consultas',
                path: '#'
            },
            {
                name: 'Preguntas Frecuentes',
                path: 'faq'
            },
        ]
    },
]