export const taskBgColorArray = [
  'bg-card01',
  'bg-card02',
  'bg-card03',
  'bg-card04',
  'bg-card05',
  'bg-card06',
  'bg-card07',
  'bg-card08',
  'bg-card09',
]

export interface Task {
  id?: string
  title: string
  completed: boolean
  arquived: boolean
  icon: string
  color: string
}
