export interface Alumni {
  id: string;
  name: string;
  email: string;
  graduationYear: number;
  department: string;
  currentPosition: string;
  company: string;
  location: string;
  industry: string;
  profileImage?: string;
  bio?: string;
  linkedIn?: string;
  achievements?: string[];
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  department: string;
  experience: string;
  salary?: string;
  postedBy: string;
  postedDate: string;
  description: string;
  requirements: string[];
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: 'Reunion' | 'Networking' | 'Workshop' | 'Seminar' | 'Social';
  description: string;
  image?: string;
  registeredCount: number;
  maxCapacity?: number;
}

export interface SuccessStory {
  id: string;
  alumniId: string;
  title: string;
  summary: string;
  fullStory: string;
  achievements: string[];
  image?: string;
  publishedDate: string;
  category: 'Entrepreneurship' | 'Corporate' | 'Research' | 'Social Impact' | 'Innovation';
}

export interface Donation {
  id: string;
  amount: number;
  donor: string;
  purpose: string;
  date: string;
  anonymous: boolean;
}