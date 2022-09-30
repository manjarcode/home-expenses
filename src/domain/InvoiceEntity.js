class InvoiceEntity {
  constructor({id}) {
    this._id = id
    this._dictionary = {}
  }

  addAmmount({expense, guest, ammount}) {
    this.ensureExpense(expense)
    this.ensureGuest(expense, guest)

    this._dictionary[expense][guest] += ammount
  }

  ensureExpense(expense) {
    if (this._dictionary[expense]) {
      return
    }
    this._dictionary[expense] = {}
  }

  ensureGuest(expense, guest) {
    if (this._dictionary[expense][guest]) {
      return
    }

    this._dictionary[expense][guest] = 0
  }
}

export default InvoiceEntity
