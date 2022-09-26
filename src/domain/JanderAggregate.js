import ShareValueObject from './ShareValueObject'

class JanderAggregate {
  constructor({expenses, guests}) {
    this.expenses = expenses
    this.guests = guests
  }

  calcultate() {
    this.expenses.map(expense => {
      return this.calculateExpense(expense)
    })
  }

  calculateExpense(expense) {
    const share = new ShareValueObject()

    expense.period.iterate(date => {
      const guestInvolved = this.guests
        .map(guest => (guest.period.contains(date) ? 1 : 0))
        .reduce((acum, isInvolved) => {
          return acum + isInvolved
        })

      this.guests.forEach(guest => {
        const isInvolved = guest.period.contains(date)

        const ammount = isInvolved ? expense.ammountPerDay() / guestInvolved : 0

        console.log('guest name', guest.name)
        console.log('expense name', expense.name)
        console.log('guestShare', ammount)

        share.addAmmount({
          guest: guest.name,
          expense: expense.name,
          ammount
        })
      })

      console.log('share', share)
      console.log('date', date.toLocaleDateString('es-ES'))
    })
  }

  isGuestInvolved(expense, guest) {
    const isInvolved = expense.period.intersectionDays(guest.period) > 0
    return isInvolved ? 1 : 0
  }
}

export default JanderAggregate
