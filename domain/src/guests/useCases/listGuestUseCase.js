import GuestRepository from '../repositories/GuestRepository.js'

export default class ListGuestUseCase {
  constructor() {
    this.repository = new GuestRepository()
  }

  execute() {
    return this.repository.list()
  }
}
