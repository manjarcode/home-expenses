import {jest} from '@jest/globals'

import PeriodValueObject from '../PeriodValueObject.js'
import Factory from './utils.js'

describe('PeriodValueObject', () => {
  test('should contains initial and final date', () => {
    const from = new Date(2020, 0, 1)
    const to = new Date(2020, 0, 2)
    const period = new PeriodValueObject({from, to})
    expect(period.contains(to)).toBe(true)
    expect(period.contains(from)).toBe(true)
  })

  test('should calculate days properly', () => {
    const period = new PeriodValueObject({
      from: new Date(2020, 0, 1),
      to: new Date(2020, 0, 10)
    })

    expect(period.days()).toBe(10)
  })

  test('should iterate without side effect on dates', () => {
    const iteratorMock = jest.fn()
    const from = Factory.date(2020, 1, 1)
    const to = Factory.date(2020, 1, 10)

    const period = new PeriodValueObject({from, to})

    period.iterate(iteratorMock)

    expect(iteratorMock).toHaveBeenCalledTimes(10)
    expect(from).toStrictEqual(Factory.date(2020, 1, 1))
    expect(to).toStrictEqual(Factory.date(2020, 1, 10))
  })
})
