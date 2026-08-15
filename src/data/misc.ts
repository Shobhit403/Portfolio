export interface Certification {
  name: string
  issuer: string
}

export const certifications: Certification[] = [
  { name: 'Professional Cloud Architect', issuer: 'Google Cloud' },
  { name: 'Professional Cloud Developer', issuer: 'Google Cloud' },
  { name: 'Developer Virtual Experience Program', issuer: 'Accenture Nordics' },
  { name: 'Mindsweeper Uttar Pradesh Zonals', issuer: 'Cognizance 2021, IIT Roorkee' },
  { name: 'KODATION', issuer: 'GeeksforGeeks' },
  { name: 'Cloud Computing Workshop', issuer: 'Cloud Net · My Equation' },
]

export const publication = {
  title: 'Image Segmentation Using the R-CNN Architecture',
  journal: 'International Journal of Creative Research Thoughts (IJCRT)',
  date: 'May 2023',
  description:
    'Applications of R-CNN-based image segmentation across scene understanding, medical image analysis, robotic perception, video surveillance, augmented reality and image compression, with a focus on computer vision and image processing.',
}

export const education = {
  degree: 'B.Tech, Computer Science & Engineering',
  institution: 'SRM Institute of Science & Technology, Chennai',
  period: 'Jul 2019 — Jul 2023',
  detail: 'CGPA 9.14',
}
