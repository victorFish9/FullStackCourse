import React from 'react'
import ReactDOM from 'react-dom/client'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import App from './App'
import noteReducer, { setNotes } from './redurcers/noteReducer'
import filterReducer from './redurcers/filterReducer'
import noteService from './services/notes'

const store = configureStore({
  reducer: {
    notes: noteReducer,
    filter: filterReducer
  }
})

noteService.getAll().then(notes =>
  store.dispatch(setNotes(notes)))

//const store = createStore(reducer)

console.log(store.getState())

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)