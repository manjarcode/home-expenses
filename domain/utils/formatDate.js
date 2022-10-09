import {CULTURE} from '../config.js'

export const formatDate = date => {
  if (!(date instanceof Date)) {
    throw new Error(`The object ${String(date)} is not a valid Date`)
  }

  return date.toLocaleDateString(CULTURE, {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric'
  })
}
