import { v4 as uuid } from 'uuid'

import ExpenseEntity from '../../expenses/entities/ExpensesEntity.js'
import GuestEntity from '../../guests/entities/GuestEntity.js'
import { roundMoney } from '../../utils/number.js'
import InvoiceEntity from '../entities/InvoiceEntity.js'

class InvoiceService {
  calculate ({ expenses, guests }): InvoiceEntity {
    const invoice = new InvoiceEntity({ id: uuid() })

    expenses.forEach(expense => {
      this._calculateExpense(expense, guests, invoice)
    })

    return invoice
  }

  _ammount (days, totalDays, ammount): number {
    const hasDaysOfIntersection = days > 0
    if (!hasDaysOfIntersection) return 0
    return roundMoney((days / totalDays) * ammount)
  }

  _calculateExpense (expense: ExpenseEntity, guests: GuestEntity[], invoice: InvoiceEntity): InvoiceEntity {
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
