import {CULTURE} from '../config.js'

const DAY = 1000 * 3600 * 24

class PeriodValueObject {
  constructor({from, to}) {
    this._validateDate(from)
    this._validateDate(to)
    this.from = from
    this.to = to
  }

  _validateDate(value) {
    const isDate = value instanceof Date
    if (!isDate) {
      throw new Error(`invalid date value ${value}`)
    }
  }

  validateFromTo(from, to) {
    if (from > to) {
      throw new Error('invalid period from date can´t be lower than to date')
    }
  }

  _calculateDays(from, to) {
    const timespam = to - from

    const days = timespam / DAY

    return days + 1
  }

  days() {
    this._dayCount = this.dayCount ?? this._calculateDays(this.from, this.to)
    return this._dayCount
  }

  intersectionDays(period) {
    let lower
    let higher = null
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
      ? this._calculateDays(higher.from, higher.to)
      : this._calculateDays(higher.from, lower.to)
  }

  contains(date) {
    return date >= this.from && date <= this.to
  }

  iterate(iteratorFunc) {
    const date = this.from
    while (date <= this.to) {
      iteratorFunc(date)
      date.setDate(date.getDate() + 1)
    }
  }

  toString() {
    return `${this.from.toLocaleDateString(
      CULTURE
    )} - ${this.to.toLocaleDateString(CULTURE)}`
  }
}

PeriodValueObject.prototype.valueOf = function () {
  return this.from.valueOf()
}

export default PeriodValueObject
