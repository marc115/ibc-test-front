export interface navItem {
    name: string
    path: string
    children?: navItem[]
}

export const navItems: navItem[] = [
    {
        name: 'Programa',
        path: 'user-area',
    },
    {
        name: 'Laboratorios',
        path: '#',
        children: [
            {
                name: 'Web prácticas',
                path: 'practice-web',
            },
            {
                name: 'Prácticas',
                path: 'practices',
            },
            {
                name: 'Vídeo',
                path: 'video',
            },
        ]
    },
    {
        name: 'Simuladores',
        path: '#',
        children: [
            {
                name: 'Gramática',
                path: '#',
            },
            {
                name: 'Comprensión lectora',
                path: '#',
            },
            {
                name: 'Comprensión auditiva',
                path: '#',
            },
        ]
    },
    {
        name: 'Tu progreso',
        path: '#',
        children: [
            {
                name: 'Exámenes',
                path: '#',
            },
            {
                name: 'W-Reporting',
                path: '#',
            },
        ]
    },
    {
        name: 'Optimus',
        path: '#',
    },
    {
        name: 'Conversaciones interactivas',
        path: '#',
    },
    {
        name: 'Consultas',
        path: '#',
        children: [
            {
                name: 'Buzón de consultas',
                path: '#',
            },
            {
                name: 'Ayuda',
                path: '#',
            },
        ]
    },
] 