import { NavItem } from './NavItem'

interface NavigationBarProps {
  checked: 'home' | 'completed'
}

export function NavigationBar({ checked }: NavigationBarProps) {
  return (
    <nav className="flex w-full justify-center gap-2.5 px-6 py-3">
      <NavItem route="/" text="In progress" checked={checked === 'home'} />
      <NavItem
        route="/completed"
        text="Completed"
        checked={checked === 'completed'}
      />
      <NavItem route="/add-list" text="Add list" />
    </nav>
  )
}
