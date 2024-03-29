import { CULTURE } from './config.js'
const MILLISECONDS_PER_DAY = 1000 * 3600 * 24

export const formatDate = (date: Date): string => {
  if (!(date instanceof Date)) {
    throw new Error(`The object ${String(date)} is not a valid Date`)
  }

  return date.toLocaleDateString(CULTURE, {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric'
  })
}

export const dateFromString = (date: string): Date => {
  const [day, month, year] = date.split('/')

  const parsedDate = new Date(Number(year), Number(month) - 1, Number(day))

  return parsedDate
}

export const floorDate = (date: Date): Date => {
  const FIRST_DAY_OF_MONTH = 1

  const floor = new Date(
    date.getFullYear(),
    date.getMonth(),
    FIRST_DAY_OF_MONTH
  )
  return floor
}

export const countDays = (from: Date, to: Date): number => {
  const timespan = Number(to) - Number(from)

  const days = timespan / MILLISECONDS_PER_DAY

  return days + 1
}

export const nextMonth = (date: Date): Date => {
  const MONTH_INCREMENT = 1
  return new Date(
    date.getFullYear(),
    date.getMonth() + MONTH_INCREMENT,
    date.getDate()
  )
}
