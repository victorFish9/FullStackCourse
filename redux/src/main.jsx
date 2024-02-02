import React from 'react'
import ReactDOM from 'react-dom/client'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import App from './App'
import noteService from './services/notes'
import store from './store'

//const store = createStore(reducer)

console.log(store.getState())

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)