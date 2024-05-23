import { BarChart, CircleHelp, Dumbbell, FlaskConical, Home, MessageSquare, SparkleIcon } from "lucide-react"


interface NavbarItem {
    name: string,
    path: string,
    icon?: React.ReactNode,
    children?: NavbarItem[]
}

export const navbarItems: NavbarItem[] = [
    {
        name: 'Programa',
        path: 'guide',
        icon: <Home />
    },
    {
        name: 'Laboratorios',
        path: '#',
        icon: <FlaskConical />,
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
        icon: <Dumbbell />,
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
        icon: <BarChart />,
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
        path: '#',
        icon: <SparkleIcon />
    },
    {
        name: 'Conversaciones interactivas',
        path: '#',
        icon: <MessageSquare />
    },
    {
        name: 'Consultas',
        path: '#',
        icon: <CircleHelp />,
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