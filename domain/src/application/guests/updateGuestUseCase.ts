import { buildGuest } from '../../domain/models/factory/guest.js'
import GuestRepository from '../../repositories/GuestRepository.js'

export default class UpdateGuestUseCase {
  private readonly guestRepository: GuestRepository
  constructor () {
    this.guestRepository = new GuestRepository()
  }

  async execute (guest: GuestDto): Promise<void> {  
    const guestEntity = buildGuest(guest)
    await this.guestRepository.update(guestEntity)
  }
}
