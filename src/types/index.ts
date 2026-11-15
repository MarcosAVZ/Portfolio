export interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  tech: string[]
  tags: string[]
  github: string | null
  demo: string | null
  video: string | null
  /** ID de un video de YouTube (ej. 'YrrGykJb8ek'); se embebe con iframe. */
  youtube: string | null
  poster: string | null
}

export interface SkillItem {
  name: string
  level?: number
}

export interface SkillCategory {
  name: string
  icon: string
  description: string
  skills: SkillItem[]
}

export interface TimelineEntry {
  year: string
  title: string
  company: string
  type: 'work' | 'education'
  description: string[]
  tech?: string[]
}

export interface NavItem {
  label: string
  href: string
}
