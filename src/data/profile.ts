import type {SocialLink} from '../types'

export const profile = {
    name: 'Angel Parra',
    tagline: 'Software Developer',

    bio: 'I am a penultimate-year Computer Science student at Swinburne University, double-majoring in Artificial Intelligence and Software Development, and a developer who builds full-stack web applications end to end. As Head of Software & Technology at English Maxing, I architected and shipped a production learning management system on AWS — a React/TypeScript SPA backed by a serverless stack with Cognito auth, AppSync/GraphQL, and DynamoDB. I enjoy taking products from idea to launch and am always looking for the next problem worth solving.',

    resumeUrl: '/resume.pdf',
    email: 'ad.parra.r@gmail.com',
}

export const socials: SocialLink[] = [
    {label: 'GitHub', href: 'https://github.com/angle6460'},
    {label: 'LinkedIn', href: 'https://www.linkedin.com/'},
    {label: 'Email', href: 'mailto:ad.parra.r@gmail.com'},
]
