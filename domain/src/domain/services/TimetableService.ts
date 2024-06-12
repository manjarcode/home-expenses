import { countDays, floorDate, nextMonth } from '../../utils/date.js'
import { guard } from '../../utils/guard.js'
import Guest from '../models/Guest.js'

export default class TimetableService {
  _validate (guests): void {
    const isArray = Array.isArray(guests)
    const areAllGuests = guests.every(item => item instanceof Guest) as boolean

    const isValid = isArray && areAllGuests

    if (!isValid) throw new Error('Must provide an array of guests')
  }

  _guests (first: Date, sorted: Guest[]): TimetableGuestDto[] {
    const mapped = sorted.map(({ name, period }) => {
      const offset = countDays(first, period.from)
      const count = period.days()

      const from = offset
      const to = offset + count

      const guest: TimetableGuestDto = { name, from, to }
      return guest
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
    const sorted = Guest.sort(guestList)

    const first = floorDate(guard(sorted[0]).period.from)
    const last = guard(sorted[sorted.length - 1]).period.to
    const guests = this._guests(first, sorted)
    const yearSpan = this._yearSpan(first, last)

    return { guests, yearSpan }
  }
}
