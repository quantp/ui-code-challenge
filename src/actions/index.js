import {FETCH_DATA} from './actionType'

export const fetchDataAction = (name) => {
  return {
    type: FETCH_DATA,
    name: name
  }
}