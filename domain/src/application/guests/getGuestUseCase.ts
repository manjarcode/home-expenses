import GuestRepository from '../../repositories/GuestRepository.js'

export default class GetGuestUseCase {
  repository: GuestRepository
  constructor () {
    this.repository = new GuestRepository()
  }

  async execute (id: string): Promise<GuestDto> {
    const entity = await this.repository.get(id)

    return entity.flatten()
  }
}
