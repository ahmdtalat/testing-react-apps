// simple test with ReactDOM
// http://localhost:3000/counter

import * as React from 'react'
import ReactDOM from 'react-dom'
import Counter from '../../components/counter'

beforeEach(() => {
  document.body.innerHTML = ''
})

test('counter increments and decrements when the buttons are clicked', () => {
  const div = document.createElement('div')
  document.body.append(div)

  ReactDOM.render(<Counter />, div)

  const [decrement, increment] = div.querySelectorAll('button')
  const msg = div.firstChild.querySelector('div')
  expect(msg.textContent).toBe('Current count: 0')
  increment.click()
  expect(msg.textContent).toBe('Current count: 1')
  decrement.click()
  expect(msg.textContent).toBe('Current count: 0')
})

/* eslint no-unused-vars:0 */
