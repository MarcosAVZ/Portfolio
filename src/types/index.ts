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
