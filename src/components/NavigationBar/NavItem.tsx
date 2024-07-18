import Link from 'next/link'

interface NavItemProps {
  text: string
  checked?: 'checked' | ''
}

export function NavItem({ text, checked }: NavItemProps) {
  return (
    <Link
      href="#"
      className="min-w-button rounded-md bg-white px-3 py-2.5 text-center text-text shadow-sm data-checked:bg-green-400 data-checked:text-white"
      data-ui={checked}
    >
      <span className="text-xs font-medium ">{text}</span>
    </Link>
  )
}
