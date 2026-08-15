export interface ProjectSection {
  label: string
  body: string
}

export interface Project {
  id: string
  index: string
  name: string
  tag: string
  summary: string
  role: string
  stack: string[]
  highlights: string[]
  featured: boolean
  visual: 'gst' | 'civic-eye' | 'foresight' | 'countify' | 'techsagar'
  caseStudy?: ProjectSection[]
}

export const projects: Project[] = [
  {
    id: 'gst-llm',
    index: '01',
    name: 'AP GST Scrutiny & Assessment Platform',
    tag: 'GenAI · Government Tax Platform',
    summary:
      "APCTD's Vertex AI-powered Tax Officer Solution — scrutiny, audit and inspection workflows for GST case handling, with AI-drafted notices and 17+ live discrepancy tables.",
    role: 'Full-stack engineer — owned the React frontend and the Flask/Django REST API backend.',
    stack: [
      'React.js',
      'Python',
      'Django',
      'Flask',
      'Vertex AI (Gemini)',
      'Firestore',
      'Cloud Storage',
      'Cloud Run',
      'Cloud Build',
      'JWT',
    ],
    highlights: [
      'Scrutiny, Audit and Inspection workflows — ASMT-10 notices, Annexure worksheets, PDF/DOCX handling',
      '17+ GST discrepancy tables with multi-level header/grouping logic and parallel query execution',
      'Vertex AI (Gemini)-driven case discrepancy explanations and notice drafting in an editable, JSON-driven UI',
      'PDF annexure generation (ReportLab), DOCX-to-PDF conversion, Firestore document versioning',
      'GCS storage with signed URLs and JWT-secured endpoints, deployed on Cloud Run with Cloud Build CI/CD',
    ],
    featured: true,
    visual: 'gst',
    caseStudy: [
      {
        label: 'Problem',
        body: 'Tax officers needed a single system to scrutinize GST filings, run audits and inspections, and issue notices — replacing fragmented manual review with a structured, explainable workflow across dozens of discrepancy categories.',
      },
      {
        label: 'My Role',
        body: 'I owned both sides of the stack: the React frontend for Scrutiny, Audit and Inspection workflows, and the Flask/Django REST API layer that powers case data, discrepancy computation and document generation.',
      },
      {
        label: 'What I Built',
        body: 'Backend APIs serving 17+ GST discrepancy tables with multi-level header/grouping logic and parallel query execution for responsive case views, plus editable JSON-driven UI structures for ASMT-10 notices and annexure worksheets.',
      },
      {
        label: 'AI Integration',
        body: 'Integrated Vertex AI (Gemini) to generate case discrepancy explanations and draft notice language, surfaced directly inside the officer-facing editing UI rather than as a separate tool.',
      },
      {
        label: 'Cloud Infrastructure',
        body: 'PDF annexure generation with ReportLab, DOCX-to-PDF conversion, Firestore-based document versioning, and GCS storage with signed URLs. JWT-secured endpoints deployed on Cloud Run with Cloud Build CI/CD.',
      },
    ],
  },
  {
    id: 'civic-eye',
    index: '02',
    name: 'Civic Eye',
    tag: 'Computer Vision · Public Safety',
    summary:
      'A real-time incident tracking platform for public safety enforcement — fine-tuned YOLO detection on live video feeds, with GPS-assisted incident localization.',
    role: 'End-to-end full-stack lead — React TypeScript frontend and Python Django backend.',
    stack: ['React', 'TypeScript', 'Python', 'Django', 'YOLO Ultralytics', 'Tailwind CSS', 'Google App Engine', 'Cloud Build', 'SQL'],
    highlights: [
      'Real-time incident tracking and public safety enforcement UI optimized for rapid situational awareness',
      'Live video feed detection using a YOLO Ultralytics model fine-tuned on a custom pothole dataset from Indian roads',
      'Real-time alerts, GPS-assisted incident localization, and incident record flows',
      'Deployed on Google App Engine with Cloud Build pipelines for automated testing and delivery',
    ],
    featured: true,
    visual: 'civic-eye',
    caseStudy: [
      {
        label: 'Problem',
        body: 'Road hazards and on-road violations were being reported manually and inconsistently, slowing dispatch decisions and making accountability hard to track.',
      },
      {
        label: 'My Role',
        body: 'I led end-to-end development — the React TypeScript frontend and the Python Django backend — including the detection pipeline integration and GCP deployment.',
      },
      {
        label: 'Detection Pipeline',
        body: 'A YOLO Ultralytics model fine-tuned on a custom pothole dataset from Indian roads identifies hazards and violations from live video feeds, feeding bounding-box detections into the incident pipeline.',
      },
      {
        label: 'What I Built',
        body: 'Real-time alerting, GPS-assisted incident localization, and incident record flows built to accelerate dispatch decisions and strengthen accountability.',
      },
      {
        label: 'Cloud Infrastructure',
        body: 'Deployed on Google App Engine with Cloud Build pipelines handling automated testing and continuous delivery.',
      },
    ],
  },
  {
    id: 'foresight',
    index: '03',
    name: 'ForeSight',
    tag: 'SaaS · Sales Demand Forecasting',
    summary:
      'A sales demand forecasting SaaS application with intuitive dashboards, built on React/Redux and deployed to Google Cloud Storage.',
    role: 'Frontend developer — dashboards, state management, and API integration.',
    stack: ['React.js', 'Redux', 'Tailwind CSS', 'Google Cloud Storage', 'Python', 'Django', 'SQL'],
    highlights: [
      'Intuitive, user-friendly dashboards for advanced sales demand forecasting',
      'Robust state management with React-Redux for seamless data flow',
      'Integrated APIs for real-time support and information retrieval',
      'Deployed to Google Cloud Storage for scalable, reliable access',
    ],
    featured: false,
    visual: 'foresight',
  },
  {
    id: 'countify',
    index: '04',
    name: 'Countify',
    tag: 'Computer Vision · Inventory Tracking',
    summary:
      'A computer-vision application that analyzes live video feeds to count and track stock items across warehouses, distributors and customers.',
    role: 'Full-stack developer — React frontend and Django backend.',
    stack: ['React.js', 'Django', 'Tailwind CSS', 'Computer Vision', 'SQL'],
    highlights: [
      'Live video analysis to count and track movement of goods and carton boxes',
      'Automated tracking to reduce manual errors and improve inventory accuracy',
      'Faster reconciliations and fewer stock discrepancies for operations teams',
      'Turned camera streams into actionable telemetry for supply-chain visibility',
    ],
    featured: false,
    visual: 'countify',
  },
  {
    id: 'techsagar',
    index: '05',
    name: 'TechSagar (Client: DSCI)',
    tag: 'Data Engineering · Web Automation',
    summary:
      'A React frontend paired with a Scrapy-based automated data extraction pipeline, deployed across AWS Elastic Beanstalk and CloudFront.',
    role: 'Frontend developer and automation engineer.',
    stack: ['React', 'Redux', 'Python', 'Scrapy', 'AWS', 'Elastic Beanstalk', 'CloudFront', 'S3', 'MongoDB'],
    highlights: [
      'Dynamic, responsive React frontend built to project requirements and user feedback',
      'Python/Scrapy web-scraping pipelines for structured data extraction from web sources',
      'Scrapy pipelines processing and storing scraped data in MongoDB',
      'Deployment scripts automating pushes from development through staging to production on Elastic Beanstalk and CloudFront',
    ],
    featured: false,
    visual: 'techsagar',
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
export const otherProjects = projects.filter((p) => !p.featured)
