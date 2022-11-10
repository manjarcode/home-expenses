import GuestRepository from '../repositories/GuestRepository.js'

export default class ListGuestUseCase {
  repository: GuestRepository
  constructor () {
    this.repository = new GuestRepository()
  }

  async execute (): Promise<Response> {
    return await this.repository.list()
  }
}
