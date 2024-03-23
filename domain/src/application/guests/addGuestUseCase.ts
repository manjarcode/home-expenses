import Guest from '../../domain/models/Guest.js'
import GuestRepository from '../../repositories/GuestRepository.js'

export default class AddGuestUseCase {
  repository: GuestRepository
  constructor () {
    this.repository = new GuestRepository()
  }

  execute (guest: GuestDto): GuestDto {    
    const guestEntity = Guest.fromDto(guest)
    void this.repository.add(guestEntity)

    return guest
  }
}
