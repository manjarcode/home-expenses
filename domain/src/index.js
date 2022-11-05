import AddGuestUseCase from './guests/useCases/addGuestUseCase.js'
import GetTimeTableUseCase from './guests/useCases/getTimetableUseCase.js'
import ListGuestUseCase from './guests/useCases/listGuestUseCase.js'
export * as config from './config/index.js'

export const useCases = {
  addGuestUseCase: new AddGuestUseCase(),
  getTimeTableUseCase: new GetTimeTableUseCase(),
  listGuestUseCase: new ListGuestUseCase()
}
