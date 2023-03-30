import GuestEntity from '../entities/GuestEntity.js'
import GuestRepository from '../repositories/GuestRepository.js'

export default class ListGuestUseCase {
  repository: GuestRepository
  constructor () {
    this.repository = new GuestRepository()
  }

  async execute (): Promise<GuestDto[]> {
    const entities = await this.repository.list()

    const dtos = entities.map((entity: GuestEntity) =>
      entity.flatten())
    return dtos
  }
}
