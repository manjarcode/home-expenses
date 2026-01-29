import AddGuestUseCase from './application/guests/addGuestUseCase.js'
import GetGuestUseCase from './application/guests/getGuestUseCase.js'
import GetTimeTableUseCase from './application/guests/getTimetableUseCase.js'
import ListGuestUseCase from './application/guests/listGuestUseCase.js'
import RemoveGuestUseCase from './application/guests/removeGuestUseCase.js'
import UpdateGuestUseCase from './application/guests/updateGuestUseCase.js'
import CalculateInvoiceUseCase from './application/invoices/calculateInvoicesUseCase.js'
export * as config from './utils/config.js'
export { default as Types } from './types.js'
export { default as DI } from './di.js'

export const useCases = {
  addGuestUseCase: new AddGuestUseCase(),
  getGuestUseCase: new GetGuestUseCase(),
  getTimeTableUseCase: new GetTimeTableUseCase(),
  updateGuestUseCase: new UpdateGuestUseCase(),
  listGuestUseCase: new ListGuestUseCase(),
  removeGuestUseCase: new RemoveGuestUseCase(),
  calculateInvoiceUseCase: new CalculateInvoiceUseCase()
}
