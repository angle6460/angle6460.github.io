import type {Project} from '../types'


export const projects: Project[] = [
    {
        title: 'EngMax Portal',
        description:
            'A production learning management system for English Maxing tutoring, built and shipped end-to-end. Students and tutors each get a tailored experience: task and submission workflows, elo-based progress tracking, feedback, and in-app notifications, all backed by a serverless AWS stack.',
        tech: ['React', 'TypeScript', 'AWS Amplify', 'Cognito', 'GraphQL', 'DynamoDB', 'S3'],
        repo: 'https://github.com/angle6460',
        live: 'https://engmaxportal.com',
    },
    {
        title: 'Project Two',
        description:
            'Another placeholder. Swap in a real project — screenshots go in /public/images and are referenced via the optional "image" field.',
        tech: ['Node.js', 'Express', 'PostgreSQL'],
        repo: 'https://github.com/angle6460',
        live: '',
    },
    {
        title: 'Project Three',
        description:
            'A third placeholder card so the grid looks balanced. Delete any you do not need.',
        tech: ['Python', 'FastAPI'],
        repo: 'https://github.com/angle6460',
        live: '',
    },
]
