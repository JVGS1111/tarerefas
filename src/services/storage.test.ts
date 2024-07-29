import { List } from '@/models/List'
import {
  addTaskToList,
  clearStorage,
  createList,
  getStorageList,
  storageKey,
} from './storage'
import { Task } from '@/models/Task'

describe('storage', () => {
  beforeEach(() => {
    clearStorage(storageKey.completed)
    clearStorage(storageKey.list)
  })

  test('should create a new list', () => {
    createList('test')
    const list = getStorageList() as List[]

    expect(list).toHaveLength(1)
    const item = list[0]
    expect(item.title).toBe('test')
  })

  test('it should be able to create more than one list', () => {
    createList('list1')
    createList('list2')
    const list = getStorageList() as List[]
    expect(list).toHaveLength(2)
    const list1 = list[0]
    const list2 = list[1]
    expect(list1.title).toBe('list1')
    expect(list2.title).toBe('list2')
  })

  test('it should be able to create a new task and save in the list', () => {
    createList('list1')
    let list = getStorageList() as List[]
    expect(list).toHaveLength(1)
    const newTask: Task = {
      arquived: false,
      completed: false,
      icon: 'test',
      title: 'task title',
      color: 'test',
    }
    addTaskToList({
      listId: list[0].id,
      task: newTask,
    })
    list = getStorageList() as List[]

    expect(list).toHaveLength(1)
    expect(list[0].tasks).toHaveLength(1)

    const savedTask = list[0].tasks[0]
    expect(savedTask.title).toBe('task title')
  })
})
