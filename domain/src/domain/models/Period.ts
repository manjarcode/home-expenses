import { CULTURE } from '../../utils/config.js'
import { countDays, toDetachedDate } from '../../utils/date.js'

class Period {
  from: Date
  to: Date
  private readonly _days: number
  currently: boolean

  constructor ({ from, to, currently }) {
    this._validateDate(from)
    this._validateDate(to)
    this._validateFromTo(from, to)
    this.from = from
    this.to = to
    this._days = countDays(from, to)
    this.currently = currently
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
    let lower: Period
    let higher: Period
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

  flattenDeprecated (): any {
    return {
      value: this.toString(),
      from: toDetachedDate(this.from),
      to: toDetachedDate(this.to)
    }
  }

  flatten(): any {
    return {
      from: this.from,
      to: this.to,
      currently: this.currently
    }
  }

  static sort (periodList): Period[] {
    if (!Array.isArray(periodList)) { throw new Error(`Must provide a period list instead of ${String(periodList)}`) }

    return periodList.sort((a, b) => a.valueOf() - b.valueOf())
  }

  valueOf (): number {
    return this.from.valueOf()
  }

  static fromPrimitives({ from, to, currently }): Period {
    return new Period({ from: new Date(from), to: new Date(to), currently })
  }
}

export default Period
