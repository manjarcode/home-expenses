import {formatDate} from './utils/formatDate.js'

class InvoiceEntity {
  constructor({id}) {
    this._id = id
    this._dictionary = {}
  }

  addAmmount({guest, expense, ammount, date}) {
    const guestPointer = this._guest(guest)
    const expensePointer = this._expense(guest, expense)

    guestPointer.total += ammount
    expensePointer.value += ammount
    expensePointer.dates.push(formatDate(date))
  }

  _guest(guest) {
    if (!this._dictionary[guest]) {
      this._dictionary[guest] = {total: 0}
    }

    return this._dictionary[guest]
  }

  _expense(guest, expense) {
    if (!this._dictionary[guest][expense]) {
      this._dictionary[guest][expense] = {
        value: 0,
        dates: []
      }
    }

    return this._dictionary[guest][expense]
  }

  byGuest(guest) {
    const {total} = this._guest(guest)
    return total
  }

  toJSON() {
    return Object.entries(this._dictionary).map(
      ([guestName, {total, ...expensesDto}]) => {
        const expenses = Object.entries(expensesDto).map(
          ([expenseName, {value, dates}]) => {
            return {expense: expenseName, value, dates}
          }
        )
        return {name: guestName, total, expenses}
      }
    )
  }
}

export default InvoiceEntity
