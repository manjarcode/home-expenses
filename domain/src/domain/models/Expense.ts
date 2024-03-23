import Period from './Period.js'

class Expense implements Entity {
  id: string
  name: string
  period: Period
  ammount: number
  paid: boolean

  constructor ({ id, name, period, ammount, paid }) {
    this.id = id
    this.name = name
    this.period = period
    this.ammount = ammount
    this.paid = paid
  }

  flatten (): ExpenseDto {
    return {
      id: this.id,
      name: this.name,
      ammount: this.ammount,
      paid: this.paid,
      period: this.period.flattenDeprecated()
    }
  }

  static fromPrimitives({id, name, period, ammount, paid}) {
    const periodVo = Period.fromPrimitives(period)
    return new Expense({id, name, period: periodVo, ammount, paid})
  }
}

export default Expense
