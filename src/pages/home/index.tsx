import { Header } from '@/components/Header'
import { NavigationBar } from '@/components/NavigationBar'
import { TaskList } from './components/TaskList'

export default function Home() {
  return (
    <>
      <Header title="What do we have to do for today?" variante="home" />
      <div className="mx-auto  max-w-app ">
        <NavigationBar />
        <TaskList />
        <TaskList />
        <TaskList />
      </div>
    </>
  )
}
