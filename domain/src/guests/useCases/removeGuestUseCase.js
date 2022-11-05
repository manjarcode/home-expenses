import GuestRepository from '../repositories/GuestRepository.js'

export default class RemoveGuestUseCase {
  constructor() {
    this.repository = new GuestRepository()
  }

  execute({id}) {
    this.repository.delete(id)
  }
}
