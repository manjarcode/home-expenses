import GuestRepository from '../repositories/GuestRepository'
import TimetableService from '../services/TimetableService'

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
