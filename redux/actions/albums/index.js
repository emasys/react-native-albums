// @flow
import axios from 'axios'
import { isSuccess, isFetching, isErrored } from '../common'
import { FETCH_ALBUMS } from '../types'

export const fetchAlbums = (): any => async (dispatch: Function): any => {
  dispatch(isFetching(true))
  const url = 'http://rallycoding.herokuapp.com/api/music_albums'
  try {
    const response = await axios.get(url)
    dispatch(isSuccess(FETCH_ALBUMS, response.data))
    dispatch(isFetching(false))
  } catch (error) {
    dispatch(isErrored(FETCH_ALBUMS, error))
    dispatch(isFetching(false))
  }
}

export const clearComments = (): any => (dispatch: Function): any => {
  dispatch(isSuccess([], 'x'))
}
