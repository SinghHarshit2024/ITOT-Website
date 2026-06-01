export interface Course {
  name: string;
  duration: string;
  eligibility: string;
  description?: string;
  category: string;
  prospects: string[];
  studyMaterials?: {
    syllabusUrl?: string;
    tmBookUrl?: string;
    ttBookUrls?: string[];
  };
}

export interface CourseCategory {
  title: string;
  icon: any;
  color: string;
  courses: Course[];
}
