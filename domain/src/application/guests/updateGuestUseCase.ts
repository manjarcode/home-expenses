import Guest from '../../domain/models/Guest.js'
import GuestRepository from '../../repositories/GuestRepository.js'

export default class UpdateGuestUseCase {
  private readonly guestRepository: GuestRepository
  constructor () {
    this.guestRepository = new GuestRepository()
  }

  async execute (guest: GuestDto): Promise<void> {  
    
    const guestEntity = Guest.fromPrimitives(guest)    
    await this.guestRepository.update(guestEntity)
  }
}
