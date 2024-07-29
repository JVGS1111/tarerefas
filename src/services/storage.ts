import { List } from '@/models/List'
import { v4 as uuidV4 } from 'uuid'
import { Task } from '@/models/Task'

export const storageKey = {
  list: '@tarerefas:lists',
  completed: '@tarerefas:completed',
}

export function createList(listName: string) {
  const storage = localStorage.getItem(storageKey.list)
  const newList: List = { id: uuidV4(), tasks: [], title: listName }
  if (!storage) {
    const newStorage: List[] = [newList]
    localStorage.setItem(storageKey.list, JSON.stringify(newStorage))
    return newList
  }
  const parsedStorage: List[] = JSON.parse(storage)
  const newStorage = [...parsedStorage, newList]
  localStorage.setItem(storageKey.list, JSON.stringify(newStorage))
  return newList
}

export interface AddTaskToListProps {
  listId: string
  task: Task
}

export function addTaskToList({ listId, task }: AddTaskToListProps) {
  const storage = localStorage.getItem(storageKey.list)
  if (!storage) {
    throw new Error('Storage not avaliable')
  }
  const parsedStorage: List[] = JSON.parse(storage)
  const listIndex = parsedStorage.findIndex((storage) => storage.id === listId)
  if (listIndex === -1) {
    throw new Error('List not found')
  }
  const newTask: Task = _createTaskObject(task)

  parsedStorage[listIndex].tasks.push(newTask)

  const newStorage = parsedStorage

  return localStorage.setItem(storageKey.list, JSON.stringify(newStorage))
}

function _createTaskObject(task: Task): Task {
  const newTask: Task = {
    id: uuidV4(),
    arquived: false,
    completed: false,
    icon: task.icon,
    title: task.title,
    color: task.color,
  }
  return newTask
}

export function getStorageList() {
  const storage = localStorage.getItem(storageKey.list)
  if (!storage) {
    return false
  }
  const list: List[] = JSON.parse(storage)
  return list
}

// test only
export function clearStorage(key: string) {
  localStorage.removeItem(key)
}
