// @flow
import { createSelector } from 'reselect'

const albums = (state: Object): Array<Object> => state.albums.albums

// eslint-disable-next-line
export const albumList = createSelector([albums], (list: Array<Object>): Array<Object> => list)
