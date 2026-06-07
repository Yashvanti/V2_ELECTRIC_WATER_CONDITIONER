/**
 * Types & Types Interfaces for V2 Electronic Water Conditioner Website
 */

export interface Benefit {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Hotspot {
  id: string;
  x: number; // percentage from left
  y: number; // percentage from top
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  text: string;
  type: "text" | "whatsapp" | "video";
  avatarUrl?: string;
  phoneMock?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface LeadSubmission {
  name: string;
  phone: string;
  email?: string;
  city: string;
  propertyType: "apartment" | "villa" | "society" | "commercial" | "other";
  notes?: string;
}
