import {jest} from '@jest/globals'

import Period from '../lib/domain/models/Period.js'
import Factory from './utils.js'

describe('Period', () => {
  test('should contains initial and final date', () => {
    const from = new Date(2020, 0, 1)
    const to = new Date(2020, 0, 2)
    const currently = false
    const period = new Period({from, to, currently})
    expect(period.contains(to)).toBe(true)
    expect(period.contains(from)).toBe(true)
    expect(period.currently).toBe(false)
  })

  test('should calculate days properly', () => {
    const period = new Period({
      from: new Date(2020, 0, 1),
      to: new Date(2020, 0, 10),
      currently: false
    })

    expect(period.days()).toBe(10)
  })

  test('should iterate without side effect on dates', () => {
    const iteratorMock = jest.fn()
    const from = Factory.date(2020, 1, 1)
    const to = Factory.date(2020, 1, 10)
    const currently = false

    const period = new Period({from, to, currently})

    period.iterate(iteratorMock)

    expect(iteratorMock).toHaveBeenCalledTimes(10)
    expect(from).toStrictEqual(Factory.date(2020, 1, 1))
    expect(to).toStrictEqual(Factory.date(2020, 1, 10))
    expect(period.currently).toBe(false)
  })
})
