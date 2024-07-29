import { List } from '@/models/List'
import { Plus, Trash } from '@phosphor-icons/react'
import { useRouter } from 'next/router'

interface TaskListHeaderProps {
  showAddButton?: boolean
  list: List
  titleRoute?: string
}

export function TaskListHeader({
  list,
  showAddButton = false,
}: TaskListHeaderProps) {
  const router = useRouter()

  return (
    <div className="flex w-full items-center justify-between">
      <span className="text-xl font-medium text-text">{list.title}</span>
      <div className="flex flex-row gap-2">
        {showAddButton && (
          <>
            <button
              type="button"
              onClick={() => {
                router.push(`/add-task?id=${list.id}`)
              }}
              className="flex  min-w-button items-center justify-center gap-1.5 rounded-md bg-white px-3 py-2.5 text-center text-xs  font-medium text-text shadow-sm "
            >
              <Plus size={19} className="text-text" weight="bold" /> add
            </button>
            <button className="rounded-md bg-red px-3 py-2.5 shadow-sm hover:brightness-90">
              <Trash className="text-white " />
            </button>
          </>
        )}
      </div>
    </div>
  )
}
