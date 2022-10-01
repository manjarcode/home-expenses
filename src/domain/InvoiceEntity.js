class InvoiceEntity {
  constructor({id}) {
    this._id = id
    this._dictionary = {}
  }

  addAmmount({guest, expense, ammount}) {
    this._ensureGuest(guest)
    this._ensureExpense(guest, expense)

    this._dictionary[guest][expense] += ammount
  }

  _ensureGuest(guest) {
    if (this._dictionary[guest]) {
      return
    }
    this._dictionary[guest] = {}
  }

  _ensureExpense(guest, expense) {
    if (this._dictionary[guest][expense]) {
      return
    }

    this._dictionary[guest][expense] = 0
  }

  byGuest(guest) {
    const expenses = Object.values(this._dictionary[guest])

    const total = expenses.reduce((acum, current) => acum + current)

    return {
      total
    }
  }
}

export default InvoiceEntity
