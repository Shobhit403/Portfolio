import gcpArchitectThumb from '../assets/certificates/gcp-architect.webp'
import gcpDeveloperThumb from '../assets/certificates/gcp-developer.webp'
import cloudnetThumb from '../assets/certificates/cloudnet-workshop.webp'
import mindsweeperThumb from '../assets/certificates/mindsweeper.webp'
import accentureThumb from '../assets/certificates/accenture-dvep.webp'
import kodationThumb from '../assets/certificates/kodation.webp'

export interface CredentialDoc {
  kind: 'pdf' | 'image'
  thumbnail: string
  fileUrl: string
  issued: string
  expires?: string
  credentialId?: string
}

export interface Certification {
  name: string
  issuer: string
  credential: CredentialDoc
}

const base = import.meta.env.BASE_URL

export const certifications: Certification[] = [
  {
    name: 'Professional Cloud Architect',
    issuer: 'Google Cloud',
    credential: {
      kind: 'pdf',
      thumbnail: gcpArchitectThumb,
      fileUrl: `${base}certificates/gcp-professional-cloud-architect.pdf`,
      issued: '27 Nov 2023',
      expires: '27 Nov 2025',
      credentialId: '46e320134d7e4fbaad864a18547ee593',
    },
  },
  {
    name: 'Professional Cloud Developer',
    issuer: 'Google Cloud',
    credential: {
      kind: 'pdf',
      thumbnail: gcpDeveloperThumb,
      fileUrl: `${base}certificates/gcp-professional-cloud-developer.pdf`,
      issued: '10 May 2025',
      expires: '10 May 2027',
      credentialId: '1f6b4378790d4afc820d45fcd9ad73a9',
    },
  },
  {
    name: 'Developer Virtual Experience Program',
    issuer: 'Accenture Nordics',
    credential: {
      kind: 'pdf',
      thumbnail: accentureThumb,
      fileUrl: `${base}certificates/accenture-nordics-dvep.pdf`,
      issued: '12 Oct 2022',
      credentialId: 'LhRwfgHFegTLAkGvy',
    },
  },
  {
    name: 'Mindsweeper Uttar Pradesh Zonals',
    issuer: 'Cognizance 2021, IIT Roorkee',
    credential: {
      kind: 'pdf',
      thumbnail: mindsweeperThumb,
      fileUrl: `${base}certificates/mindsweeper-cognizance-2021.pdf`,
      issued: '15–18 Apr 2021',
      credentialId: 'nrwr3621d0',
    },
  },
  {
    name: 'KODATION',
    issuer: 'GeeksforGeeks Student Chapter, SRMIST-NCR',
    credential: {
      kind: 'image',
      thumbnail: kodationThumb,
      fileUrl: kodationThumb,
      issued: '22 Jan 2022',
    },
  },
  {
    name: 'Cloud Computing Workshop',
    issuer: 'Cloud Net · My Equation',
    credential: {
      kind: 'pdf',
      thumbnail: cloudnetThumb,
      fileUrl: `${base}certificates/cloudnet-workshop.pdf`,
      issued: '19 Jul 2021',
    },
  },
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
