import PeriodValueObject from '../periods/valueObjects/PeriodValueObject.js'

class Expense {
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

  toJSON (): ExpenseDto {
    return {
      id: this.id,
      name: this.name,
      ammount: this.ammount,
      paid: this.paid,
      period: this.period.flatten()
    }
  }
}

export default Expense
