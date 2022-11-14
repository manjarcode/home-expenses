// eslint-disable-next-line import/extensions
import {roundMoney} from '../../utils/number'

class InvoiceEntity {
  constructor({id}) {
    this._id = id
    this._dictionary = {}
  }

  addAmmount({guest, expense, ammount, days}) {
    const guestPointer = this._guest(guest)
    const expensePointer = this._expense(guest, expense)

    guestPointer.total += ammount
    expensePointer.value = roundMoney(ammount)
    expensePointer.days = days
  }

  _guest(guest) {
    if (!this._dictionary[guest]) {
      this._dictionary[guest] = {total: 0}
    }

    return this._dictionary[guest]
  }

  _expense(guest, expense) {
    if (!this._dictionary[guest][expense]) {
      this._dictionary[guest][expense] = {}
    }

    return this._dictionary[guest][expense]
  }

  byGuest(guest) {
    const {total, ...rest} = this._guest(guest)
    return {...rest, total: roundMoney(total)}
  }

  toJSON() {
    return Object.entries(this._dictionary).map(
      ([guestName, {total, ...expensesDto}]) => {
        const expenses = Object.entries(expensesDto).map(
          ([expenseName, {value, days}]) => {
            return {expense: expenseName, value, days}
          }
        )
        return {name: guestName, total: roundMoney(total), expenses}
      }
    )
  }
}

export default InvoiceEntity
