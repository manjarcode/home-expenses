import PeriodValueObject from '../../periods/valueObjects/PeriodValueObject.js'
import ExpenseEntity from './ExpensesEntity.js'

export function buildExpense (id: string, name: string, ammount: Number, paid: Boolean, from: Date, to: Date): ExpenseEntity {
  const entity = new ExpenseEntity({
    id,
    name,
    ammount,
    paid,
    period: new PeriodValueObject({
      from: new Date(from),
      to: new Date(to)
    })
  })

  return entity
}
