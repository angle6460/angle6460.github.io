import type {Project} from '../types'


export const projects: Project[] = [
    {
        title: 'EngMax Portal',
        description:
            'A production learning management system for English Maxing tutoring, built and shipped end-to-end. Students and tutors each get a tailored experience: task and submission workflows, elo-based progress tracking, feedback, and in-app notifications, all backed by a serverless AWS stack.',
        tech: ['React', 'TypeScript', 'AWS Amplify', 'Cognito', 'GraphQL', 'DynamoDB', 'S3'],
        repo: '',
        live: 'https://engmaxportal.com',
    },
    {
        title: 'Influence RTS Sandbox',
        description:
            "An AI-driven real-time strategy sandbox in Python and Pygame, built for Swinburne's AI for Games unit. Player buildings emit influence across a tile grid that enemy bases read to coordinate attacks, while an autonomous director agent defends through a finite state machine — combining influence maps, boid steering, Dijkstra pathfinding, and tiered threat assessment into one emergent system.",
        tech: ['Python', 'Pygame', 'NumPy', 'Influence Maps', 'Boids', 'FSM AI', 'Pathfinding'],
        repo: 'https://github.com/angle6460/COS30002-Custom-Project',
    },
    {
        title: 'Work Scheduler',
        description:
            'A cross-platform desktop app built with .NET 9 and Avalonia that automates weekly staff rostering. Managers define reusable workload templates and register employees with skills and contracted hours; a custom priority-based algorithm then auto-assigns staff, balancing each person’s contracted versus requested hours before exporting the schedule to CSV. Backed by a normalized SQLite database with cascading relationships and covered by 26 NUnit tests across the data layer and scheduling engine.',
        tech: ['C#', '.NET 9', 'Avalonia', 'MVVM', 'SQLite', 'NUnit'],
        repo: 'https://github.com/angle6460/WorkSchedulerApp',
    },
]
