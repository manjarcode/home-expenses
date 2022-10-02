import {v4 as uuid} from 'uuid'

import InvoiceEntity from './InvoiceEntity.js'

class InvoiceService {
  calculate({expenses, guests}) {
    const invoice = new InvoiceEntity({id: uuid()})

    expenses.forEach(expense => {
      this._calculateExpense(expense, guests, invoice)
    })

    return invoice
  }

  _calculateExpense(expense, guests, invoice) {
    expense.period.iterate(date => {
      const guestInvolved = guests
        .map(guest => (guest.period.contains(date) ? 1 : 0))
        .reduce((acum, isInvolved) => {
          return acum + isInvolved
        })

      guests.forEach(guest => {
        const isInvolved = guest.period.contains(date)

        const ammount = isInvolved ? expense.ammountPerDay() / guestInvolved : 0

        if (isInvolved) {
          invoice.addAmmount({
            guest: guest.name,
            expense: expense.name,
            ammount,
            date
          })
        }
      })
    })

    return invoice
  }
}

export default InvoiceService
