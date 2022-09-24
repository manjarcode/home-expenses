class PeriodValueObject {
  constructor({ from, to, name }) {
    this.validateDate(from);
    this.validateDate(to);
    this.from = from;
    this.to = to;
    this.name = name;
  }

  validateDate(value) {
    const isDate = value instanceof Date;
    if (!isDate) {
      throw new Error(`invalid date value ${value}`);
    }
  }

  validateFromTo(from, to) {
    if (from > to) {
      throw new Error("invalid period from date can´t be lower than to date");
    }
  }

  _calculateDays(from, to) {
    const timespam = to - from;
    const millisecondsPerDay = 1000 * 3600 * 24;

    const days = timespam / millisecondsPerDay;

    return days + 1;
  }

  days() {
    return this._calculateDays(this.from, this.to);
  }

  intersectionDays(period) {
    let lower,
      higher = null;
    if (this < period) {
      lower = this;
      higher = period;
    } else {
      lower = period;
      higher = this;
    }

    const hasIntersection = lower.to > higher.from || lower.to > higher.to;
    if (!hasIntersection) {
      return 0;
    }

    const isHigherInsideLower = lower.to > higher.to;

    return isHigherInsideLower
      ? this._calculateDays(higher.from, higher.to)
      : this._calculateDays(higher.from, lower.to);
  }
}

PeriodValueObject.prototype.valueOf = function () {
  return this.from.valueOf();
};

export default PeriodValueObject;
