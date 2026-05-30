export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  iconName: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  details: string[];
}

export interface TimelineItem {
  id: string;
  year: string;
  role: string;
  organization: string;
  type: 'education' | 'fellowship' | 'position';
  description: string;
  details?: string[];
}

export interface AwardItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: 'award' | 'certification';
}

export interface TestimonialItem {
  id: string;
  name: string;
  condition: string;
  rating: number;
  review: string;
  date: string;
  initials: string;
}

export interface ClinicHours {
  days: string;
  hours: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  service: string;
  notes: string;
}
