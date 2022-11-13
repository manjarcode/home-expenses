import GuestRepository from '../repositories/GuestRepository.js'
import TimetableService from '../services/TimetableService.js'

export default class GetTimeTableUseCase {
  guestRepository: GuestRepository
  timetableService: TimetableService

  constructor () {
    this.guestRepository = new GuestRepository()
    this.timetableService = new TimetableService()
  }

  async execute (): Promise<TimetableDto> {
    const guests = await this.guestRepository.list()
    return this.timetableService.execute(guests)
  }
}
