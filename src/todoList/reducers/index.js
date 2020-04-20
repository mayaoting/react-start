import {combineReducers} from 'redux';
import todos from './todo'
import visibilityFilter from './visibilityFilter'

const rootReducer = combineReducers({todos,visibilityFilter})

export default rootReducer
