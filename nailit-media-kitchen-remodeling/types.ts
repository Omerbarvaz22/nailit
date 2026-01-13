
export type ServiceType = 
  | 'Kitchen Remodeling'
  | 'Bathroom Remodeling'
  | 'Full Home Remodeling'
  | 'ADU (Accessory Dwelling Units)'
  | 'Garage Conversions'
  | 'Backyard & Hardscaping'
  | 'New Construction';

export type ProjectTimeline = 'Immediate' | '3-6 Months' | 'Planning';

export interface LeadFormData {
  service: ServiceType | '';
  zipCode: string;
  timeline: ProjectTimeline | '';
  fullName: string;
  phone: string;
  email: string;
  isHomeowner: 'Yes' | 'No' | '';
}
