
export interface Project {
  name: string;
  description: string;
  tags?: string[];
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  projects?: Project[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
}

export interface Honor {
  year: string;
  title: string;
}

export interface Achievement {
  year: string;
  title: string;
  description: string;
}
