import { NavItem } from './NavItem'

export function NavigationBar() {
  return (
    <nav className="flex w-full justify-center gap-2.5 px-6 py-3">
      <NavItem text="In progress" />
      <NavItem text="Completed" />
      <NavItem text="add list" />
    </nav>
  )
}
