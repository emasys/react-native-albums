import { combineReducers } from 'redux'
import albums from './albums'
import common from './common'

const rootReducer = combineReducers({
  albums,
  common,
})

export default rootReducer
