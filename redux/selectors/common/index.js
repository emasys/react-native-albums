// @flow
import { createSelector } from 'reselect'

const loading = (state: Object): boolean => state.common.loading

// eslint-disable-next-line
export const status = createSelector([loading], (status: boolean): Array<Object> => status)
