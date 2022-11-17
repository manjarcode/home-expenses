import {v4 as uuid} from 'uuid'

import InvoiceEntity from '../entities/InvoiceEntity'

class InvoiceService {
  calculate({expenses, guests}) {
    const invoice = new InvoiceEntity({id: uuid()})

    expenses.forEach(expense => {
      this._calculateExpense(expense, guests, invoice)
    })

    return invoice
  }

  _ammount(days, totalDays, ammount) {
    const hasDaysOfIntersection = days > 0
    if (!hasDaysOfIntersection) return 0
    return (days / totalDays) * ammount
  }

  _calculateExpense(expense, guests, invoice) {
    let totalDays = 0
    const guestExpenseJoin = guests.map(({name, period}) => {
      const days = expense.period.intersectionDays(period)
      totalDays += days
      return {
        guest: name,
        days
      }
    })

    guestExpenseJoin.forEach(({guest, days}) => {
      const ammount = this._ammount(days, totalDays, expense.ammount)
      invoice.addAmmount(guest, expense.name, ammount, days)
    })

    return invoice
  }
}

export default InvoiceService
