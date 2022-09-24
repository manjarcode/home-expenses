class ExpenseEntity {
  constructor({ name, period, ammount, split = 1 }) {
    this.name = name;
    this.period = period;
    this.ammount = ammount;
    this.split = split;
  }

  getExpense(guestPeriod) {
    const totalDays = this.period.days();

    const intersectionDays = this.period.intersectionDays(guestPeriod);

    const ratio = intersectionDays / totalDays;
    const ratioPerGuest = ratio / this.split;

    const value = this.ammount * ratioPerGuest;

    return value;
  }
}

export default ExpenseEntity;
