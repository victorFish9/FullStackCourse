import { createStore } from 'redux'

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        case 'ZERO':
            return 0
        default: // jos ei mikään ylläolevista tullaan tänne
            return state
    }
}

const store = createStore(counterReducer)

store.subscribe(() => {
    const sotreNow = store.getState()
    console.log(sotreNow)
})


store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })

store.dispatch({ type: 'ZERO' })
store.dispatch({ type: 'DECREMENT' })
