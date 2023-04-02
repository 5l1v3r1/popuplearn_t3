export interface PUL {
  id: number;
  name: string;
  introduction: string;
  sentence: string;
  subject: string;
  pul_elements: PulElement[];
}

export interface PulElement {
  id: number;
  question: string;
  answer: string;
  details: PulDetail[];
}

export interface PulDetail {
  id: number;
  description: string;
}
