import { countDays, floorDate, nextMonth } from '../../utils/date.js'
import GuestEntity from '../entities/GuestEntity.js'

export default class TimetableService {
  _validate (guests): void {
    const isArray = Array.isArray(guests)
    const areAllGuests = guests.every(item => item instanceof GuestEntity) as boolean

    const isValid = isArray && areAllGuests

    if (!isValid) throw new Error('Must provide an array of guests')
  }

  _guests (first: Date, sorted: GuestEntity[]): GuestDto[] {
    const mapped = sorted.map(({ name, period }) => {
      const offset = countDays(first, period.from)
      const count = period.days()

      return { name, from: offset, to: offset + count }
    })

    return mapped
  }

  _yearSpan (first: Date, last: Date): any {
    let pointer = first

    const yearSpan: YearSpan[] = []

    const getYear = (year: number): YearSpan => {
      const found = yearSpan.find(i => i.year === year)
      if (found != null) {
        return found
      } else {
        const item = { year, months: [] }
        yearSpan.push(item)

        return item
      }
    }

    const putYearMonth = (year, month): void => {
      const found = getYear(year)
      found.months.push(month)
    }

    while (pointer < last) {
      const year = pointer.getFullYear()
      const month = pointer.getMonth()

      putYearMonth(year, month)

      pointer = nextMonth(pointer)
    }

    return yearSpan
  }

  execute (guestList): TimetableDto {
    this._validate(guestList)
    const sorted = GuestEntity.sort(guestList)

    const first = floorDate(ensure(sorted[0]).period.from)
    const last = ensure(sorted[sorted.length - 1]).period.to
    const guests = this._guests(first, sorted)
    const yearSpan = this._yearSpan(first, last)

    return { guests, yearSpan }
  }
}

function ensure<T> (value: T | undefined): T {
  if (value === undefined) {
    throw new Error('Must be defined')
  }
  return value
}
