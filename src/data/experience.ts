import type {ExperienceItem} from '../types'

export const experience: ExperienceItem[] = [
    {
        role: 'Head of Software & Technology',
        company: 'English Maxing',
        period: '2026 — Present',
        highlights: [
            'Architected and shipped a production learning management system (engmaxportal.com) on AWS Amplify Gen 2 — React/TypeScript SPA with Cognito auth, AppSync/GraphQL, DynamoDB, and S3 storage',
            'Designed a role-based platform (student/tutor) with per-model authorization and JWT group-based access control',
            'Built core LMS features: elo-based progress tracking, task/submission workflows, feedback, and an in-app notification system',
            'Presented future development proposals to shareholders',
        ],
    },
    {
        role: 'Night Fill Team Member',
        company: 'Coles',
        period: '2025 — 2026',
        highlights: [
            'Met nightly replenishment KPIs in a fast-paced team environment',
            'Maintained accuracy and pace under tight overnight deadlines',
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
    'C#',
    'AWS',
    'GraphQL',
]
