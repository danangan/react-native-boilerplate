/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import AppIndex from '../src/App'

// Note: test renderer must be required after react-native.

it('renders correctly', () => {
  renderer.create(<AppIndex />)
})