import { Header } from '@/components/Header'
import { NavigationBar } from '@/components/NavigationBar'

export default function Home() {
  return (
    <div>
      <Header title="What do we have to do for today?" variante="home" />
      <NavigationBar />
    </div>
  )
}
