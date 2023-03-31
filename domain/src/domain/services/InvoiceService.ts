import { v4 as uuid } from 'uuid'

import Expense from '../../models/Expense.js'
import Guest from '../../models/Guest.js'
import Invoice from '../../models/Invoice.js'
import { roundMoney } from '../../utils/number.js'

class InvoiceService {
  calculate ({ expenses, guests }): Invoice {
    const invoice = new Invoice({ id: uuid() })

    expenses.forEach(expense => {
      const isPaid: boolean = expense.paid
      if (!isPaid) {
        this._calculateExpense(expense, guests, invoice)
      }
    })

    return invoice
  }

  private _ammount (days, totalDays, ammount): number {
    const hasDaysOfIntersection = days > 0
    if (!hasDaysOfIntersection) return 0
    return roundMoney((days / totalDays) * ammount)
  }

  private _calculateExpense (expense: Expense, guests: Guest[], invoice: Invoice): Invoice {
    let totalDays = 0

    const guestExpenseJoin = guests.map(({ name, period }) => {
      const days = expense.period.intersectionDays(period)
      totalDays += days
      return {
        guest: name,
        days
      }
    })

    guestExpenseJoin.forEach(({ guest, days }) => {
      const ammount = this._ammount(days, totalDays, expense.ammount)
      invoice.addAmmount(guest, expense.name, ammount, days)
    })

    return invoice
  }
}

export default InvoiceService
