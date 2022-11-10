class GuestEntity {
  id: string
  name: string
  period: any
  constructor ({ id, name, period }) {
    this.id = id
    this.name = name
    this.period = period
  }

  flatten (): any {
    const { from, to, currently } = this.period.flatten()
    return { id: this.id, name: this.name, from, to, currently }
  }

  static sort (guestList: GuestEntity[]): GuestEntity[] {
    if (!Array.isArray(guestList)) { throw new Error(`Must provide a guest list instead of ${String(guestList)}`) }

    const sorted = guestList.sort(
      (a, b) => a.period.valueOf() - b.period.valueOf()
    )
    return sorted
  }
}

export default GuestEntity
