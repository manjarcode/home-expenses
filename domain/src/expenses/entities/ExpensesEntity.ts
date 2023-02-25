import PeriodValueObject from '../../periods/valueObjects/PeriodValueObject.js'

class ExpenseEntity {
  id: string
  name: string
  period: PeriodValueObject
  ammount: number
  paid: boolean

  constructor ({ id, name, period, ammount, paid }) {
    this.id = id
    this.name = name
    this.period = period
    this.ammount = ammount
    this.paid = paid
  }

  toJSON (): object {
    return {
      id: this.id,
      name: this.name,
      from: this.period.from.getTime(),
      to: this.period.to.getTime(),
      ammount: this.ammount,
      paid: this.paid
    }
  }
}

export default ExpenseEntity
