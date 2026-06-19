import type { Project } from '../types'

// Add or edit projects here — the Projects section renders this array.
export const projects: Project[] = [
  {
    title: 'Project One',
    description:
      'Placeholder description. Explain what the project does, the problem it solves, and your role in it in one or two sentences.',
    tech: ['React', 'TypeScript', 'Vite'],
    repo: 'https://github.com/angle6460',
    live: '',
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
