class ExpenseEntity {
  constructor({name, period, ammount}) {
    this.name = name
    this.period = period
    this.ammount = ammount
  }

  getExpense(period, split) {
    const totalDays = this.period.days()

    const intersectionDays = this.period.intersectionDays(period)

    const ratio = intersectionDays / totalDays
    const ratioPerGuest = ratio / split

    const value = this.ammount * ratioPerGuest

    return value
  }

  ammountPerDay() {
    this._ammountPerDay =
      this._ammountPerDay ?? this.ammount / this.period.days()
    return this._ammountPerDay
  }
}

export default ExpenseEntity
