export type Language = 'en' | 'zh';

export interface ProjectItem {
  id: string;
  title: string;
  titleZh: string;
  category: 'ai-music' | 'mir-data' | 'composition';
  categoryLabelEn: string;
  categoryLabelZh: string;
  roleEn: string;
  roleZh: string;
  year: string;
  organization: string;
  summaryEn: string;
  summaryZh: string;
  descriptionEn: string;
  descriptionZh: string;
  tags: string[];
  externalUrl?: string;
  externalUrlLabelEn?: string;
  externalUrlLabelZh?: string;
  codeSnippet?: {
    filename: string;
    language: string;
    code: string;
  };
  collaboratorsEn: string;
  collaboratorsZh: string;
  outcomesEn: string[];
  outcomesZh: string[];
}

export interface EducationItem {
  degree: string;
  degreeZh: string;
  institution: string;
  institutionZh: string;
  period: string;
  statusEn: string;
  statusZh: string;
  locationEn: string;
  locationZh: string;
  honorsEn?: string;
  honorsZh?: string;
  highlightsEn: string[];
  highlightsZh: string[];
}

export interface ExperienceItem {
  role: string;
  roleZh: string;
  organization: string;
  organizationZh: string;
  period: string;
  mentorEn?: string;
  mentorZh?: string;
  descEn: string;
  descZh: string;
  achievementsEn: string[];
  achievementsZh: string[];
  url?: string;
}

export interface PublicationItem {
  id: string;
  title: string;
  titleZh: string;
  authorsEn: string;
  authorsZh: string;
  venueEn: string;
  venueZh: string;
  year: string;
  statusEn: string;
  statusZh: string;
  abstractEn: string;
  abstractZh: string;
  bibtex: string;
  pdfUrl?: string;
}
