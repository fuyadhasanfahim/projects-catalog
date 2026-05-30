import { StatItem, ServiceItem, TimelineItem, AwardItem, TestimonialItem, ClinicHours } from './types';

export const DOCTOR_INFO = {
  fullName: "Dr. Evelyn Ross, MD, FACC",
  title: "MD, FACC — Senior Consultant Cardiologist & Director of Heart Health",
  shortTitle: "Consultant Cardiologist",
  tagline: "Compassionate clinical care, backed by world-class cardiological expertise.",
  subTagline: "With over 15 years of experience at leading medical institutions, Dr. Ross offers comprehensive, evidence-based diagnostics and surgical consultations designed around your life.",
  email: "contact@drevelynross.com",
  phone: "+1 (555) 732-4786",
  address: "Suite 410, Vanguard Medical Center, 782 Beacon Street, Boston, MA 02215",
  mapUrl: "https://www.google.com/maps", // Real placeholder link
  experienceYears: 15,
  patientsCount: 12000,
  proceduresCount: 3400,
  awardsCount: 14,
  philosophy: "I believe cardiology is as much about sincere listening and preventive education as it is about advanced intervention. My goal is to partner with patients, providing them with clear options, scientific clarity, and warm, reassuring support at every step of their cardiovascular health journey.",
  bioParagraph1: "Dr. Evelyn Ross is a board-certified, fellowship-trained cardiologist specializing in non-invasive imaging, lipid management, coronary artery disease, and preventative cardiac care. She serves as the Clinical Director of Cardiovascular Medicine at Vanguard Health.",
  bioParagraph2: "Prior to her division leadership, she spent eight years as an Associate Professor of Cardiology, teaching clinical diagnostics and researching cardiovascular prevention biomarkers. Dr. Ross advocates for a holistic lifestyle-first philosophy integrated with state-of-the-art technological treatments.",
  consultationFee: "$180",
};

export const CLINIC_HOURS: ClinicHours[] = [
  { days: "Monday – Thursday", hours: "08:00 AM – 05:00 PM" },
  { days: "Friday", hours: "08:00 AM – 03:00 PM" },
  { days: "Saturday (Urgent Consults)", hours: "09:00 AM – 01:00 PM" },
  { days: "Sunday", hours: "Closed" }
];

export const STATS_ITEMS: StatItem[] = [
  {
    id: "stat-1",
    value: 15,
    suffix: "+",
    label: "Years of Practice",
    iconName: "Award"
  },
  {
    id: "stat-2",
    value: 12800,
    suffix: "+",
    label: "Patients Treated",
    iconName: "Users"
  },
  {
    id: "stat-3",
    value: 3400,
    suffix: "+",
    label: "Heart Procedures",
    iconName: "Activity"
  },
  {
    id: "stat-4",
    value: 14,
    suffix: "",
    label: "Regional Awards",
    iconName: "HeartHandshake"
  }
];

export const SPECIALTIES: ServiceItem[] = [
  {
    id: "srv-1",
    title: "Preventive Cardiology",
    description: "Personalized cardiovascular risk evaluations, lifestyle mentoring, blood pressure normalization, and tailored lipid management programs.",
    iconName: "ShieldCheck",
    details: [
      "Dynamic cardiovascular risk calculators",
      "Advanced lipid and biomarker screening",
      "Hypertension and metabolic guidance",
      "Personalized nutrition & activity coaching"
    ]
  },
  {
    id: "srv-2",
    title: "Advanced Cardiac Diagnostics",
    description: "Detailed, high-precision non-invasive testing using state-of-the-art echocardiogram, ECG, and remote heart telemetry suites.",
    iconName: "Activity",
    details: [
      "High-definition 3D Transthoracic Echocardiogram",
      "Holter monitoring (24h to 14 days)",
      "Exercise stress tests & stress echo",
      "Coronary Calcium scoring consultation"
    ]
  },
  {
    id: "srv-3",
    title: "Heart Failure Management",
    description: "Comprehensive guideline-directed medical therapies and monitoring workflows aimed at improving quality of life and longevity.",
    iconName: "Heart",
    details: [
      "Tailored medication titration and monitoring",
      "In-home symptom tracking systems",
      "Pacemaker & CRT coordination",
      "Advanced cardiomyopathy consults"
    ]
  },
  {
    id: "srv-4",
    title: "Valvular & Coronary Consultation",
    description: "Surgical and interventional advisement for cardiac valve diseases, stenosis, and coronary blockages, collaborating with elite surgeons.",
    iconName: "Stethoscope",
    details: [
      "Aortic, mitral, and tricuspid severity review",
      "Catheter-based replacement (TAVR) planning",
      "Second opinions on surgical bypass (CABG)",
      "Angioplasty and stent recovery management"
    ]
  }
];

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    id: "time-1",
    year: "2018 – Present",
    role: "Clinical Director of Cardiovascular Medicine",
    organization: "Vanguard Medical Center & Heart Institute",
    type: "position",
    description: "Directs inpatient and outpatient cardiovascular units, overseeing a multidisciplinary team of 14 clinicians. Champions state-of-the-art echocardiography protocols and preventative health outreach.",
    details: ["Standardized non-invasive diagnostic workflows", "Instituted a specialized heart wellness clinic for women", "Spearheaded local cardiac rehabilitation programs"]
  },
  {
    id: "time-2",
    year: "2013 – 2018",
    role: "Senior Attending Cardiologist & Faculty",
    organization: "Boston University School of Medicine / Teaching Hospital",
    type: "position",
    description: "Trained medical students and cardiology fellows in clinical methodology, cardiac pathology, and bedside manner, while operating an active preventative clinic.",
    details: ["Awarded Faculty Excellence in Teaching (2016)", "Published 12 peer-reviewed studies on early coronary markers"]
  },
  {
    id: "time-3",
    year: "2010 – 2013",
    role: "Fellowship in Advanced Cardiovascular Medicine",
    organization: "The Cleveland Clinic (Heart, Vascular & Thoracic Institute)",
    type: "fellowship",
    description: "Completed rigorous sub-specialization fellowship under nation-leading cardiovascular surgeons and imaging researchers, with special emphasis on complex echocardiography and structural valve clinics."
  },
  {
    id: "time-4",
    year: "2007 – 2010",
    role: "Internal Medicine Residency",
    organization: "Johns Hopkins Hospital, Baltimore",
    type: "education",
    description: "Acquired intensive clinical experience in high-volume critical care, cardiac care units (CCU), and outpatient chronic disease clinics. Graduated in top 5% of residency group."
  },
  {
    id: "time-5",
    year: "2003 – 2007",
    role: "Doctor of Medicine (M.D.)",
    organization: "Johns Hopkins University School of Medicine",
    type: "education",
    description: "Graduated with honors. Received the Dr. William Stewart Award for Cardiovascular Foundations and Clinical Empathy."
  }
];

export const AWARDS_ITEMS: AwardItem[] = [
  {
    id: "aw-1",
    title: "Regional Exemplary Clinician Award",
    issuer: "State Medical Association",
    year: "2024",
    category: "award"
  },
  {
    id: "aw-2",
    title: "Fellow of the American College of Cardiology (FACC)",
    issuer: "American College of Cardiology",
    year: "2014",
    category: "certification"
  },
  {
    id: "aw-3",
    title: "Board Certification in Cardiovascular Disease",
    issuer: "American Board of Internal Medicine",
    year: "2011",
    category: "certification"
  },
  {
    id: "aw-4",
    title: "Distinguished Teaching & Mentorship Faculty",
    issuer: "University Cardiology Society",
    year: "2017",
    category: "award"
  },
  {
    id: "aw-5",
    title: "Vanguard Clinical Excellence Gold Medal",
    issuer: "Vanguard Health Partners",
    year: "2021",
    category: "award"
  },
  {
    id: "aw-6",
    title: "Precision Cardiography Certification",
    issuer: "Society of Cardiovascular Computed Tomography",
    year: "2015",
    category: "certification"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Arthur Pendelton",
    condition: "Preventive Care & Hypertension Patient",
    rating: 5,
    review: "Dr. Ross completely transformed my lifestyle. For years my doctors just increased my medication. Dr. Ross took the time to understand my daily stress, adjusted my doses strategically, and structured a manageable exercise routine. My heart health has never been better and I feel genuinely heard.",
    date: "April 2026",
    initials: "AP"
  },
  {
    id: "test-2",
    name: "Maria Velasquez",
    condition: "Valvular Disease Repair Patient",
    rating: 5,
    review: "When I was diagnosed with mitral valve issues, I was terrified. Dr. Ross spent over 40 minutes with me drawing diagrams, outlining precisely what the surgery would resemble, and explaining the rehabilitation process. Having such a brilliant doctor with that degree of compassion made all the difference.",
    date: "January 2026",
    initials: "MV"
  },
  {
    id: "test-4",
    name: "Marcus Sterling",
    condition: "Post-Angioplasty & Rehabilitation Care",
    rating: 5,
    review: "I came to Dr. Ross for follow-up care after stent placement. Her thoroughness, precise testing routines, and comforting disposition gave me my confidence back. Her clinic is exceptionally clean, professional, and runs beautifully on time.",
    date: "November 2025",
    initials: "MS"
  }
];
