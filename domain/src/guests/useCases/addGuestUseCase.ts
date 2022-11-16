import PeriodValueObject from '../../periods/valueObjects/PeriodValueObject.js'
import GuestEntity from '../entities/GuestEntity.js'
import GuestRepository from '../repositories/GuestRepository.js'

export default class AddGuestUseCase {
  repository: GuestRepository
  constructor () {
    this.repository = new GuestRepository()
  }

  execute (id: string, name: string, from: Date, to: Date): GuestEntity {
    const period = new PeriodValueObject({ from, to })
    const guest = new GuestEntity({ id, name, period })

    void this.repository.add(guest)

    return guest
  }
}
