import { Header } from '@/components/Header'
import { NavigationBar } from '@/components/NavigationBar'
import { TaskList } from '@/components/TaskList/TaskList'

export default function Completed() {
  return (
    <>
      <Header title="What do we have to do for today?" variante="home" />
      <div className="mx-auto  max-w-app ">
        <NavigationBar checked="completed" />
        <TaskList />
      </div>
    </>
  )
}
