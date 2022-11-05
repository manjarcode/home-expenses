import PeriodValueObject from '../../periods/valueObjects/PeriodValueObject.js'
import GuestEntity from '../entities/GuestEntity.js'
import GuestRepository from '../repositories/GuestRepository.js'

export default class AddGuestUseCase {
  constructor() {
    this.repository = new GuestRepository()
  }

  execute({id, name, from, to}) {
    const period = new PeriodValueObject({from, to})
    const guest = new GuestEntity({id, name, period})

    this.repository.add(guest)

    return guest
  }
}
