import Period from './Period.js'

class Guest {
  id: string
  name: string
  period: Period
  active: boolean

  constructor ({ id, name, period, active }) {
    this.id = id
    this.name = name
    this.period = period
    this.active = active
  }

  getId (): string {
    return this.id
  }

  flatten (): any {
    return { id: this.id, name: this.name, period: this.period.flatten(), active: this.active }
  }

  static sort (guestList: Guest[]): Guest[] {
    if (!Array.isArray(guestList)) { throw new Error(`Must provide a guest list instead of ${String(guestList)}`) }

    const sorted = guestList.sort(
      (a, b): number => a.period.valueOf() - b.period.valueOf()
    )
    return sorted
  }

  static fromDto ({ id, name, period, active }): Guest {
    return new Guest({
      id,
      name,
      period: Period.fromPrimitives(period),
      active
    })
  }

  static fromPrimitives ({ id, name, from, to, currently, active }): Guest {
    return new Guest({
      id,
      name,
      period: Period.fromPrimitives({ from, to, currently }),
      active
    })
  }
}

export default Guest
