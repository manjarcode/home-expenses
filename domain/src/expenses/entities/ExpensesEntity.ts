import PeriodValueObject from '../../periods/valueObjects/PeriodValueObject.js'

class ExpenseEntity {
  name: string
  period: PeriodValueObject
  ammount: number

  constructor ({ name, period, ammount }) {
    this.name = name
    this.period = period
    this.ammount = ammount
  }
}

export default ExpenseEntity
