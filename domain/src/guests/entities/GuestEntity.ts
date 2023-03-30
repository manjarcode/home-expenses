import PeriodValueObject from '../../periods/valueObjects/PeriodValueObject.js'

class GuestEntity {
  id: string
  name: string
  period: PeriodValueObject
  constructor ({ id, name, period }) {
    this.id = id
    this.name = name
    this.period = period
  }

  flatten (): any {
    return { id: this.id, name: this.name, period: this.period.flatten() }
  }

  static sort (guestList: GuestEntity[]): GuestEntity[] {
    if (!Array.isArray(guestList)) { throw new Error(`Must provide a guest list instead of ${String(guestList)}`) }

    const sorted = guestList.sort(
      (a, b): number => a.period.valueOf() - b.period.valueOf()
    )
    return sorted
  }
}

export default GuestEntity
