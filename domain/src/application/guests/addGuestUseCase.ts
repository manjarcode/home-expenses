import { buildGuest } from '../../models/factory/guest.js'
import GuestRepository from '../../repositories/GuestRepository.js'

export default class AddGuestUseCase {
  repository: GuestRepository
  constructor () {
    this.repository = new GuestRepository()
  }

  execute (guest: GuestDto): GuestDto {
    const guestEntity = buildGuest(guest)
    void this.repository.add(guestEntity)

    return guest
  }
}
