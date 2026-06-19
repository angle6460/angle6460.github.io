import type {ExperienceItem} from '../types'

// Add or edit roles here — the Experience section renders this array (newest first).
export const experience: ExperienceItem[] = [
    {
        role: 'Your Role',
        company: 'Company Name',
        period: '2023 — Present',
        highlights: [
            'Placeholder bullet describing an achievement or responsibility.',
            'Quantify impact where you can (e.g. improved X by Y%).',
        ],
    },
    {
        role: 'Previous Role',
        company: 'Earlier Company',
        period: '2021 — 2023',
        highlights: [
            'Another placeholder bullet.',
            'Keep these tight and outcome-focused.',
        ],
    },
]

export const skills: string[] = [
    'TypeScript',
    'React',
    'Node.js',
    'Python',
    'SQL',
    'Git',
]
