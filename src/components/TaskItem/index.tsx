import { ShoppingCart, Trash } from '@phosphor-icons/react'

export function TaskItem() {
  return (
    <li className="flex w-full items-center gap-1.5 rounded-md bg-teal-200 px-2.5 py-2">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
        <ShoppingCart className="text-title" size={24} />
      </div>
      <span className="font-medium text-title ">task</span>
      <button className="ml-auto">
        <Trash className="text-title" size={24} />
      </button>
    </li>
  )
}
