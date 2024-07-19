import { render, screen } from '@testing-library/react'
import { NavItem } from './NavItem'

describe('NavItem', () => {
  it('should render correctly', () => {
    const textContent = 'test text'

    render(<NavItem route="/" text={textContent} checked={false} />)

    const button = screen.getByRole('link', {
      name: textContent,
    })

    expect(button).toBeInTheDocument()
  })

  it('should display the correct text prop', () => {
    const textContent = 'test text'

    render(<NavItem route="/" text={textContent} checked={false} />)

    const button = screen.getByRole('link', {
      name: textContent,
    })

    expect(button).toHaveTextContent(textContent)
  })

  it('should be able to be checked', () => {
    const textContent = 'test text'

    render(<NavItem route="/" text={textContent} checked={true} />)

    const button = screen.getByRole('link', {
      name: textContent,
    })

    expect(button).toHaveAttribute('data-ui', 'checked')
    expect(button).toHaveClass(
      'data-checked:bg-green-400 data-checked:text-white',
    )
  })

  it('should display the correct style if it is checked', () => {
    const textContent = 'test text'

    render(<NavItem route="/" text={textContent} checked={true} />)

    const button = screen.getByRole('link', {
      name: textContent,
    })

    expect(button).toHaveAttribute('data-ui', 'checked')
  })

  it('should display the correct style if it is not checked', () => {
    const textContent = 'test text'

    render(<NavItem route="/" text={textContent} checked={false} />)

    const button = screen.getByRole('link', {
      name: textContent,
    })

    expect(button).toHaveAttribute('data-ui', '')
  })
})
