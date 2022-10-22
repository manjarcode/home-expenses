class GuestEntity {
  constructor({id, name, period}) {
    this.id = id
    this.name = name
    this.period = period
  }

  flatten() {
    const {from, to, currently} = this.period.flatten()
    return {id: this.id, name: this.name, from, to, currently}
  }
}

export default GuestEntity
