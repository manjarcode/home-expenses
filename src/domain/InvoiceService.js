import {v4 as uuid} from 'uuid'

import InvoiceEntity from './InvoiceEntity.js'

class InvoiceService {
  calculate({expenses, guests}) {
    return expenses
      .map(expense => {
        return this._calculateExpense(expense, guests)
      })
      .reduce((acum, current) => current)
  }

  _calculateExpense(expense, guests) {
    const invoice = new InvoiceEntity({id: uuid()})
    expense.period.iterate(date => {
      const guestInvolved = guests
        .map(guest => (guest.period.contains(date) ? 1 : 0))
        .reduce((acum, isInvolved) => {
          return acum + isInvolved
        })

      guests.forEach(guest => {
        const isInvolved = guest.period.contains(date)

        const ammount = isInvolved ? expense.ammountPerDay() / guestInvolved : 0

        invoice.addAmmount({
          guest: guest.name,
          expense: expense.name,
          ammount
        })
      })
    })

    return invoice
  }
}

export default InvoiceService
