import AddExpenseUseCase from './application/expenses/addExpenseUseCase.js'
import ListExpensesUseCase from './application/expenses/listExpensesUseCase.js'
import RemoveExpenseUseCase from './application/expenses/removeExpenseUseCase.js'
import UpdateExpenseUseCase from './application/expenses/updateExpenseUseCase.js'
import AddGuestUseCase from './application/guests/addGuestUseCase.js'
import GetTimeTableUseCase from './application/guests/getTimetableUseCase.js'
import ListGuestUseCase from './application/guests/listGuestUseCase.js'
import RemoveGuestUseCase from './application/guests/removeGuestUseCase.js'
import CalculateInvoiceUseCase from './application/invoices/calculateInvoicesUseCase.js'
export * as config from './utils/config.js'

export const useCases = {
  addExpenseUseCase: new AddExpenseUseCase(),
  removeExpenseUseCase: new RemoveExpenseUseCase(),
  listExpensesUseCase: new ListExpensesUseCase(),
  updateExpenseUseCase: new UpdateExpenseUseCase(),
  addGuestUseCase: new AddGuestUseCase(),
  getTimeTableUseCase: new GetTimeTableUseCase(),
  listGuestUseCase: new ListGuestUseCase(),
  removeGuestUseCase: new RemoveGuestUseCase(),
  calculateInvoiceUseCase: new CalculateInvoiceUseCase()
}
