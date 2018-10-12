import { IS_FETCHING } from '../../actions/types'

const initialState = {
  loading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case IS_FETCHING:
      return { ...state, loading: action.payload }

    default:
      return state
  }
}
