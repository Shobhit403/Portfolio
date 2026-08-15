import gcpArchitectThumb from '../assets/certificates/gcp-architect.webp'
import gcpDeveloperThumb from '../assets/certificates/gcp-developer.webp'

export interface CredentialDoc {
  thumbnail: string
  pdfUrl: string
  issued: string
  expires: string
  credentialId: string
}

export interface Certification {
  name: string
  issuer: string
  credential?: CredentialDoc
}

export const certifications: Certification[] = [
  {
    name: 'Professional Cloud Architect',
    issuer: 'Google Cloud',
    credential: {
      thumbnail: gcpArchitectThumb,
      pdfUrl: `${import.meta.env.BASE_URL}certificates/gcp-professional-cloud-architect.pdf`,
      issued: '27 Nov 2023',
      expires: '27 Nov 2025',
      credentialId: '46e320134d7e4fbaad864a18547ee593',
    },
  },
  {
    name: 'Professional Cloud Developer',
    issuer: 'Google Cloud',
    credential: {
      thumbnail: gcpDeveloperThumb,
      pdfUrl: `${import.meta.env.BASE_URL}certificates/gcp-professional-cloud-developer.pdf`,
      issued: '10 May 2025',
      expires: '10 May 2027',
      credentialId: '1f6b4378790d4afc820d45fcd9ad73a9',
    },
  },
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
