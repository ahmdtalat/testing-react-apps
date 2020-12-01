// mocking Browser APIs and modules
// http://localhost:3000/location

import * as React from 'react'
import {render, screen, act} from '@testing-library/react'
import {useCurrentPosition} from 'react-use-geolocation'
import Location from '../../examples/location'

jest.mock('react-use-geolocation')

test('displays the users current location', async () => {
  const fakePosition = {
    coords: {
      latitude: 34,
      longitude: 22,
    },
  }

  let setReturnValue
  function useMockCurrPosition() {
    const state = React.useState([])
    setReturnValue = state[1]
    return state[0]
  }

  useCurrentPosition.mockImplementation(useMockCurrPosition)

  render(<Location />)
  expect(screen.queryByLabelText(/loading/i)).toBeInTheDocument()

  act(() => {
    setReturnValue([fakePosition])
  })

  expect(screen.queryByLabelText(/loading/i)).not.toBeInTheDocument()
  expect(screen.getByText(/latitude/i)).toHaveTextContent(
    `Latitude: ${fakePosition.coords.latitude}`,
  )
})

/*
eslint
  no-unused-vars: "off",
*/
