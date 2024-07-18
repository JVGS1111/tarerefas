import { TaskItem } from '@/components/TaskItem'
import { TaskListHeader } from './TaskListHeader'

export function TaskList() {
  return (
    <ul className="flex w-full flex-col gap-2.5 px-6 py-3">
      <TaskListHeader />
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
    </ul>
  )
}
