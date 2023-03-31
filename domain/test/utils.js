import Expense from '../lib/expenses/entities/ExpensesEntity.js'
import GuestEntity from '../lib/guests/entities/GuestEntity.js'
import PeriodValueObject from '../lib/periods/valueObjects/PeriodValueObject.js'

export const guest = (id, name, from, to, currently) => {
  const period = new PeriodValueObject({from, to, currently})
  return new GuestEntity({id, name, period})
}

export const expense = (name, from, to, ammount, currently) => {
  return new Expense({
    name,
    period: new PeriodValueObject({from, to, currently}),
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
