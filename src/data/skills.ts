export interface SkillCategory {
  id: string
  label: string
  description: string
  items: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    description: 'Interfaces for enterprise workflows and consumer-grade dashboards alike.',
    items: ['React.js', 'TypeScript', 'JavaScript', 'Redux.js', 'Tailwind CSS', 'Vite'],
  },
  {
    id: 'backend',
    label: 'Backend',
    description: 'REST APIs and data logic powering multi-table, multi-role platforms.',
    items: ['Python', 'Django', 'Django REST Framework', 'Flask', 'REST APIs', 'SQL'],
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    description: 'Deploying and running services on GCP and AWS with CI/CD pipelines.',
    items: [
      'Google Cloud Platform',
      'Cloud Run',
      'App Engine',
      'Cloud Build',
      'Cloud Functions',
      'Cloud Storage',
      'Firestore',
      'BigQuery',
      'AWS S3',
      'AWS Lambda',
      'AWS EC2',
      'CloudFront',
      'Docker',
    ],
  },
  {
    id: 'ai',
    label: 'AI / ML',
    description: 'GenAI integration and computer vision shipped into production workflows.',
    items: ['Vertex AI', 'Gemini', 'YOLO Ultralytics', 'Computer Vision'],
  },
  {
    id: 'tools',
    label: 'Tools',
    description: 'The everyday toolchain behind the systems above.',
    items: ['Git', 'GitHub', 'Bitbucket', 'Postman', 'VS Code', 'MySQL Workbench'],
  },
]
