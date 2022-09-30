import PeriodValueObject from '../PeriodValueObject.js'

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
})
