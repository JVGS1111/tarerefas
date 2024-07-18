import { Plus } from '@phosphor-icons/react'

interface TaskListHeaderProps {
  showAddButton?: boolean
}

export function TaskListHeader({ showAddButton = false }: TaskListHeaderProps) {
  return (
    <div className="flex w-full items-center justify-between">
      <span className="text-xl font-medium text-text">Groceries</span>
      {showAddButton && (
        <button className="flex min-w-button items-center justify-center gap-1.5 rounded-md bg-white px-3 py-2.5 text-center text-xs  font-medium text-text shadow-sm ">
          <Plus size={19} className="text-text" weight="bold" /> add
        </button>
      )}
    </div>
  )
}
