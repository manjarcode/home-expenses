import GuestRepository from '../repositories/GuestRepository.js'
import TimetableService from '../services/TimetableService.js'

export default class GetTimeTableUseCase {
  constructor() {
    this.guestRepository = new GuestRepository()
    this.timeTableService = new TimetableService()
  }

  async execute() {
    const guests = await this.guestRepository.list()
    return this.timeTableService.execute(guests)
  }
}
