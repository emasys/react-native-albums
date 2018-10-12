import { IS_FETCHING } from '../types'

export const isSuccess = (type, payload) => ({
  type,
  payload,
})

export const isErrored = (type, payload) => ({
  type,
  payload,
})

export const isFetching = payload => ({
  type: IS_FETCHING,
  payload,
})
