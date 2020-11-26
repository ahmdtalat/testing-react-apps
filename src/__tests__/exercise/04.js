// form testing
// http://localhost:3000/login

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import faker from 'faker'
import Login from '../../components/login'

test('submitting the form calls onSubmit with username and password', () => {
  const buildLoginForm = overrides => ({
    username: faker.internet.userName(),
    password: faker.internet.password(),
    ...overrides,
  })
  const {username, password} = buildLoginForm({password: '12345'})
  const handleSubmit = jest.fn()
  render(<Login onSubmit={handleSubmit} />)

  const submitButton = screen.getByRole('button', {name: /submit/i})

  userEvent.type(
    screen.getByLabelText('Username', {selector: 'input'}),
    username,
  )
  userEvent.type(
    screen.getByLabelText('Password', {selector: 'input'}),
    password,
  )
  userEvent.click(submitButton)
  // expect(submittedData).toEqual(expectedData)
  // assert that submittedData is correct
  // 💰 use `toEqual` from Jest: 📜 https://jestjs.io/docs/en/expect#toequalvalue
  expect(handleSubmit).toHaveBeenCalledWith({username, password})
})

/*
eslint
  no-unused-vars: "off",
*/
