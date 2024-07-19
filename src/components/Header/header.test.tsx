import { render, screen } from '@testing-library/react'
import { Header } from '.'

describe('Header', () => {
  it('should be able to display the title prop', () => {
    const title = 'test title'
    render(<Header title={title} variante="home" />)

    const heading = screen.getByText(title)

    expect(heading).toBeInTheDocument()
  })

  it('should render the home variation', () => {
    const title = 'test title'
    render(<Header title={title} variante="home" />)

    const homeVariantElement = screen.getByTestId('home-variant')

    expect(homeVariantElement).toBeInTheDocument()
  })

  it('should render the create variation', () => {
    const title = 'test title'
    render(<Header title={title} variante="create" />)

    const homeVariantElement = screen.getByTestId('create-variant')

    expect(homeVariantElement).toBeInTheDocument()
  })
})
