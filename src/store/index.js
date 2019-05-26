import { createStore } from 'redux'
import todoApp from '../reducers/TodoApp'

const store = createStore(todoApp)

export default store;