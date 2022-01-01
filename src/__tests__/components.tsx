import React from 'react'
import TestComponent from '../components/Test'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
// eslint-disable-current-page no-undef
let container: any = null
// eslint-disable-next-line no-undef
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div')
  document.body.appendChild(container)
})

// eslint-disable-next-line no-undef
afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

it('renders with or without a name', () => {
  act(() => {
    render(<TestComponent />, container)
  })
  expect(container.textContent).toBe('Hey, stranger')

  act(() => {
    render(<TestComponent name="Jenny" />, container)
  })
  expect(container.textContent).toBe('Hello, Jenny!')

  act(() => {
    render(<TestComponent name="Margaret" />, container)
  })
  expect(container.textContent).toBe('Hello, Margaret!')
})
