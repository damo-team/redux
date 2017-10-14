import React from 'react'
import { render } from 'react-dom'
import { createStore } from '../../../src/index'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'

const store = createStore(reducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('J_page')
)
