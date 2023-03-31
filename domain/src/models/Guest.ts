import Period from './Period.js'

class Guest {
  id: string
  name: string
  period: Period
  constructor ({ id, name, period }) {
    this.id = id
    this.name = name
    this.period = period
  }

  flatten (): any {
    return { id: this.id, name: this.name, period: this.period.flatten() }
  }

  static sort (guestList: Guest[]): Guest[] {
    if (!Array.isArray(guestList)) { throw new Error(`Must provide a guest list instead of ${String(guestList)}`) }

    const sorted = guestList.sort(
      (a, b): number => a.period.valueOf() - b.period.valueOf()
    )
    return sorted
  }
}

export default Guest