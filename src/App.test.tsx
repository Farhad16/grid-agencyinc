import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import {describe, expect, it} from 'vitest'
import App from './App'

describe('App component', () => {
  it('renders the correct text', () => {
    render(<App />)
    const app = screen.getByText('This is app')
    expect(app).toBeInTheDocument()
  })
})
