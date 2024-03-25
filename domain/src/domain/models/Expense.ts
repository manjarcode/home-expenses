import Period from './Period.js'

class Expense implements Entity {
  id: string
  name: string
  period: Period
  amount: number
  paid: boolean

  constructor ({ id, name, period, amount, paid }) {
    this.id = id
    this.name = name
    this.period = period
    this.amount = amount
    this.paid = paid
  }

  flatten (): ExpenseDto {
    return {
      id: this.id,
      name: this.name,
      amount: this.amount,
      paid: this.paid,
      period: this.period.flatten()
    }
  }

  static fromDto({id, name, period, amount, paid}) {
    const periodVo = Period.fromPrimitives(period)
    return new Expense({id, name, period: periodVo, amount, paid})
  }

  static fromPrimitives({id, name, from, to, amount, paid}) {
    const periodVo = Period.fromPrimitives({from, to, currently: false})
    return new Expense({id, name, period: periodVo, amount, paid})
  }
}

export default Expense
