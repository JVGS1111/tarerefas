import { Header } from '@/components/Header'
import { NavigationBar } from '@/components/NavigationBar'
import { TaskList } from '../../components/TaskList/TaskList'
import { useEffect, useState } from 'react'
import { List } from '@/models/List'
import { createList, getStorageList } from '@/services/storage'

export default function Home() {
  const [listArray, setListArray] = useState<List[]>([])

  useEffect(() => {
    initComponent()
  }, [])

  function initComponent() {
    const list = getStorageList()
    if (!list) {
      const newListItem = createList('My first list')
      setListArray([newListItem])
      return
    }
    setListArray(list)
  }

  function renderTaskLists(_lists: List[]) {
    if (!_lists || _lists.length === 0) {
      return null
    }

    return _lists.map((item) => {
      return <TaskList key={item.id} list={item} showAddButton />
    })
  }

  return (
    <>
      <Header title="What do we have to do for today?" variante="home" />
      <div className="mx-auto max-w-app ">
        <NavigationBar checked="home" />
        {renderTaskLists(listArray)}
      </div>
    </>
  )
}
