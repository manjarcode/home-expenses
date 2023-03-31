import Guest from '../../models/Guest.js'
import GuestRepository from '../repositories/GuestRepository.js'

export default class ListGuestUseCase {
  repository: GuestRepository
  constructor () {
    this.repository = new GuestRepository()
  }

  async execute (): Promise<GuestDto[]> {
    const entities = await this.repository.list()

    const dtos = entities.map((entity: Guest) =>
      entity.flatten())
    return dtos
  }
}
