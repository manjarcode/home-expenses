import ExpenseEntity from '../ExpensesEntity.js'
import GuestEntity from '../GuestEntity.js'
import PeriodValueObject from '../PeriodValueObject.js'

export const guest = (id, name, from, to) => {
  return new GuestEntity({id, name, period: new PeriodValueObject({from, to})})
}

export const expense = (name, from, to, ammount) => {
  return new ExpenseEntity({
    name,
    period: new PeriodValueObject({from, to}),
    ammount
  })
}

export const date = (year, month, day) => {
  return new Date(Date.UTC(year, month, day))
}

const Factory = {
  guest,
  expense,
  date
}

export default Factory
