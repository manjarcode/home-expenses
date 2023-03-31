import { v4 as uuid } from 'uuid'

import Expense from '../../models/Expense.js'
import GuestEntity from '../../guests/entities/GuestEntity.js'
import { roundMoney } from '../../utils/number.js'
import InvoiceEntity from '../entities/InvoiceEntity.js'

class InvoiceService {
  calculate ({ expenses, guests }): InvoiceEntity {
    const invoice = new InvoiceEntity({ id: uuid() })

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

  private _calculateExpense (expense: Expense, guests: GuestEntity[], invoice: InvoiceEntity): InvoiceEntity {
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
