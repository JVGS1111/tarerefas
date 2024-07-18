import { TaskItem } from '@/components/TaskItem'
import { TaskListHeader } from './TaskListHeader'

interface TaskListProps {
  listTitle: string
  showAddButton?: boolean
}

export function TaskList({ listTitle, showAddButton = false }: TaskListProps) {
  return (
    <ul className="flex w-full flex-col gap-2.5 px-6 py-3">
      <TaskListHeader listTitle={listTitle} showAddButton={showAddButton} />
      <TaskItem />
      <TaskItem />
      <TaskItem />
    </ul>
  )
}
