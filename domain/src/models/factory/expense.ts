import buildPeriod from '../../periods/valueObjects/factory.js'
import PeriodValueObject from '../../periods/valueObjects/PeriodValueObject.js'
import Expense from '../Expense.js'

// TODO: Deprecated
export function buildExpenseDeprecated (id: string, name: string, ammount: Number, paid: Boolean, from: Date, to: Date): Expense {
  const entity = new Expense({
    id,
    name,
    ammount,
    paid,
    period: new PeriodValueObject({
      from: new Date(from),
      to: new Date(to),
      currently: false
    })
  })

  return entity
}

// TODO: replace buildExpense with this
export function buildExpense (id: string, name: string, ammount: Number, paid: Boolean, period: DetachedPeriod): Expense {
  const periodVo = buildPeriod(period)

  const entity = new Expense({
    id,
    name,
    ammount,
    paid,
    period: periodVo
  })

  return entity
}
