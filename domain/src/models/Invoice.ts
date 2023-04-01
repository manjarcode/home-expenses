// eslint-disable-next-line import/extensions
import { guard } from '../utils/guard'
import { roundMoney } from '../utils/number.js'

export default class Invoice {
  _id: string
  _dictionary: InvoiceGuestDto[]

  constructor ({ id }) {
    this._id = id
    this._dictionary = []
  }

  addAmmount (guest: string, expense: string, ammount: number, days: number): void {
    const guestPointer = this._guest(guest)

    this._addExpense(guestPointer, expense, ammount, days)
  }

  _guest (guest: string): InvoiceGuestDto {
    const hasGuest = this._dictionary.some(i => i.name === guest)
    if (!hasGuest) {
      const guestDto: InvoiceGuestDto = {
        name: guest,
        total: 0,
        expenses: []
      }
      this._dictionary.push(guestDto)
    }

    const found = this._dictionary.find(i => i.name === guest)
    return guard(found)
  }

  _addExpense (guest: InvoiceGuestDto, expense: string, ammount: number, days: number): void {
    guest.total = roundMoney(guest.total + ammount)
    const expenseDto: InvoiceExpenseDto = {
      expense,
      value: roundMoney(ammount),
      days: Math.round(days)
    }
    guest.expenses.push(expenseDto)
  }

  byGuest (guest): InvoiceGuestDto {
    const found = this._dictionary.find(i => i.name === guest)
    return guard(found)
  }

  flatten (): InvoiceGuestDto[] {
    return this._dictionary
  }
}
