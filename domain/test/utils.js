import Expense from '../lib/domain/models/Expense.js'
import Guest from '../lib/domain/models/Guest.js'
import Period from '../lib/domain/models/Period.js'

export const guest = (id, name, from, to, currently) => {
  const period = new Period({from, to, currently})
  return new Guest({id, name, period})
}

export const expense = (name, from, to, amount, currently) => {
  return new Expense({
    name,
    period: new Period({from, to, currently}),
    amount
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
