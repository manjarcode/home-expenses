import GuestRepository from '../../guests/repositories/GuestRepository.js'

export default class RemoveGuestUseCase {
  repository: GuestRepository
  constructor () {
    this.repository = new GuestRepository()
  }

  async execute (id: string): Promise<void> {
    await this.repository.delete(id)
  }
}
