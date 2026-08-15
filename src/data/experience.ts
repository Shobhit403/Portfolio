export interface ExperienceEntry {
  id: string
  company: string
  role: string
  period: string
  location: string
  note?: string
  summary: string
  highlights: string[]
  stack: string[]
}

export const experience: ExperienceEntry[] = [
  {
    id: 'valiance',
    company: 'Valiance Solutions',
    role: 'Software Engineer',
    period: 'Sep 2023 — Present',
    location: 'Noida, Uttar Pradesh',
    note: 'Joined as Software Engineer Intern, converted to full-time in June 2024',
    summary:
      'Full-stack engineer across five production applications spanning a government tax platform, computer-vision safety tooling, and SaaS forecasting — owning everything from React UI to Django/Flask APIs to GCP/AWS deployment.',
    highlights: [
      'Built full-stack modules for the AP GST Scrutiny & Assessment Platform, owning the React frontend and the Flask/Django REST API backend.',
      'Developed backend APIs serving 17+ GST discrepancy tables with multi-level header/grouping logic and parallel query execution.',
      'Integrated Vertex AI (Gemini) for case discrepancy explanations and AI-assisted notice drafting inside an editable, JSON-driven UI.',
      'Led end-to-end development of Civic Eye, a real-time incident tracking platform using a fine-tuned YOLO model for road-hazard detection.',
      'Delivered ForeSight, a sales-forecasting SaaS dashboard, and Countify, a computer-vision inventory tracking tool.',
    ],
    stack: ['React', 'TypeScript', 'Redux', 'Python', 'Django', 'Flask', 'Vertex AI', 'GCP', 'AWS'],
  },
  {
    id: 'highradius',
    company: 'HighRadius',
    role: 'Software Engineer Intern',
    period: 'Jan 2022 — Apr 2022',
    location: 'Hyderabad',
    summary:
      'Developed and deployed an AI-enabled Fintech B2B cloud application end to end — from user research through data models to UI and backend.',
    highlights: [
      'Led full-stack development of an AI-enabled Fintech B2B cloud application.',
      'Worked across user requirement analysis, UX design, ML model development, UI and backend implementation.',
      'Applied Python, Pandas, NumPy and SQL for data modeling and machine learning components.',
    ],
    stack: ['Python', 'Pandas', 'NumPy', 'SQL', 'Machine Learning'],
  },
  {
    id: 'saharanext',
    company: 'Sahara Next',
    role: 'Information Technology Trainee',
    period: 'Aug 2021 — Sep 2021',
    location: 'Lucknow',
    summary:
      'Two-track project covering web standards compliance tooling and an early NLP chatbot built with Python.',
    highlights: [
      'Built an HTML/CSS validation project assessing website standards compliance.',
      'Trained a Python machine-learning chatbot for contextually relevant automated responses.',
    ],
    stack: ['Python', 'NLP', 'Tkinter', 'Machine Learning'],
  },
]
