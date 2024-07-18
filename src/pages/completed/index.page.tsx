import { Header } from '@/components/Header'
import { NavigationBar } from '@/components/NavigationBar'
import { TaskList } from '@/components/TaskList/TaskList'

export default function Completed() {
  return (
    <>
      <Header
        title="Looking back for something that you've done?"
        variante="home"
      />
      <div className="mx-auto max-w-app">
        <NavigationBar checked="completed" />
        <TaskList listTitle="Completed" />
      </div>
    </>
  )
}
