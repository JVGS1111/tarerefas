import Link from 'next/link'

interface NavItemProps {
  text: string
}

export function NavItem({ text }: NavItemProps) {
  return (
    <Link
      href="#"
      className="min-w-button rounded-md bg-white px-3 py-2.5 text-center shadow-sm"
      data-active={true}
    >
      <span className="text-xs font-medium text-text">{text}</span>
    </Link>
  )
}
