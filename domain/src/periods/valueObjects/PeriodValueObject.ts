import { CULTURE } from '../../config/index.js'
import { countDays } from '../../utils/date.js'

class PeriodValueObject {
  from: Date
  to: Date
  _days: number

  constructor ({ from, to }) {
    this._validateDate(from)
    this._validateDate(to)
    this._validateFromTo(from, to)
    this.from = from
    this.to = to
    this._days = countDays(from, to)
  }

  _validateDate (value: Date): void {
    const isDate = value instanceof Date
    if (!isDate) {
      throw new Error(`invalid date value ${String(value)}`)
    }
  }

  _validateFromTo (from: Date, to: Date): void {
    if (from > to) {
      throw new Error('invalid period from date can´t be lower than to date')
    }
  }

  days (): number {
    return this._days
  }

  intersectionDays (period): number {
    let lower: PeriodValueObject
    let higher: PeriodValueObject
    if (this < period) {
      lower = this
      higher = period
    } else {
      lower = period
      higher = this
    }

    const hasIntersection = lower.to > higher.from || lower.to > higher.to
    if (!hasIntersection) {
      return 0
    }

    const isHigherInsideLower = lower.to > higher.to

    return isHigherInsideLower
      ? countDays(higher.from, higher.to)
      : countDays(higher.from, lower.to)
  }

  contains (date): boolean {
    return date >= this.from && date <= this.to
  }

  iterate (iteratorFunc): void {
    const date = new Date(this.from)
    while (date <= this.to) {
      iteratorFunc(date)
      date.setDate(date.getDate() + 1)
    }
  }

  toString (): string {
    return `${this.from.toLocaleDateString(
      CULTURE
    )} - ${this.to.toLocaleDateString(CULTURE)}`
  }

  flatten (): any {
    return {
      from: this.from.getTime(),
      to: this.to.getTime(),
      currently: false
    }
  }

  static sort (periodList): PeriodValueObject[] {
    if (!Array.isArray(periodList)) { throw new Error('Must provide a period list instead of', periodList) }

    return periodList.sort((a, b) => a.valueOf() - b.valueOf())
  }
}

PeriodValueObject.prototype.valueOf = function () {
  return this.from.valueOf()
}

export default PeriodValueObject
