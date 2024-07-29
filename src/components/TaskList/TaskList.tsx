import { TaskItem } from '@/components/TaskItem'
import { TaskListHeader } from './TaskListHeader'
import { List } from '@/models/List'
import { EmptyList } from './EmptyList'

interface TaskListProps {
  list: List
  showAddButton?: boolean
}

export function TaskList({ list, showAddButton = false }: TaskListProps) {
  function renderTasks(_list: List) {
    if (!_list) {
      return null
    }
    if (_list.tasks.length === 0) {
      return <EmptyList />
    }

    return _list.tasks.map((item) => <TaskItem key={item.id} />)
  }

  return (
    <ul className="flex w-full flex-col gap-2.5 px-6 py-3">
      <TaskListHeader list={list} showAddButton={showAddButton} />
      {renderTasks(list)}
    </ul>
  )
}
