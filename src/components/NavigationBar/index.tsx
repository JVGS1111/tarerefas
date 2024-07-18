import { NavItem } from './NavItem'

interface NavigationBarProps {
  checked: 'home' | 'completed'
}

export function NavigationBar({ checked }: NavigationBarProps) {
  return (
    <nav className="flex w-full justify-center gap-2.5 px-6 py-3">
      <NavItem text="In progress" checked={checked === 'home'} />
      <NavItem text="Completed" checked={checked === 'completed'} />
      <NavItem text="Add list" />
    </nav>
  )
}
