import Home from '@/pages/home'
import { render, screen } from '@testing-library/react'

describe('Home', () => {
  it('should be rendered correctly', () => {
    render(<Home />)

    const heading = screen.getByText('What do we have to do for today?')

    expect(heading).toBeInTheDocument()
  })
})
