/*
 * types.ts
 */


export type IconName = string // FIXME

export type ContactEntry = {
  name: string,
  icon?: IconName,
  value: string,
}

export type SkillLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
export type Skill = {
  name: string,
  value: SkillLevel,
}

export type Language = {
  name: string,
  level: string,
}

export type Education = {
  degree: string,
  place: string,
  date: string,
}

export type Experience = {
  name: string,
  position?: string
  date: string,
  details: string[],
  tags: string[],
  link?: string,
}


export type CV = {
  name: string,
  title: string,
  contact: ContactEntry[],
  skills: Skill[],
  about: string,
  languages: Language[],
  education: Education[],
  experience: Experience[],
  projects: Experience[],
}
