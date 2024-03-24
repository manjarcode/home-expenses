import AddExpenseUseCase from './application/expenses/addExpenseUseCase.js'
import GetExpensesUseCase from './application/expenses/getExpenseUseCase.js'
import ListExpensesUseCase from './application/expenses/listExpensesUseCase.js'
import ParseExpenseDocumentUseCase from './application/expenses/parseExpenseDocumentUseCase.js'
import RemoveExpenseUseCase from './application/expenses/removeExpenseUseCase.js'
import UpdateExpenseUseCase from './application/expenses/updateExpenseUseCase.js'
import AddGuestUseCase from './application/guests/addGuestUseCase.js'
import GetGuestUseCase from './application/guests/getGuestUseCase.js'
import GetTimeTableUseCase from './application/guests/getTimetableUseCase.js'
import ListGuestUseCase from './application/guests/listGuestUseCase.js'
import RemoveGuestUseCase from './application/guests/removeGuestUseCase.js'
import UpdateGuestUseCase from './application/guests/updateGuestUseCase.js'
import CalculateInvoiceUseCase from './application/invoices/calculateInvoicesUseCase.js'
export * as config from './utils/config.js'

export const useCases = {
  addExpenseUseCase: new AddExpenseUseCase(),
  getExpenseUseCase: new GetExpensesUseCase(),
  listExpensesUseCase: new ListExpensesUseCase(),
  updateExpenseUseCase: new UpdateExpenseUseCase(),
  removeExpenseUseCase: new RemoveExpenseUseCase(),
  addGuestUseCase: new AddGuestUseCase(),
  getGuestUseCase: new GetGuestUseCase(),
  getTimeTableUseCase: new GetTimeTableUseCase(),
  updateGuestUseCase: new UpdateGuestUseCase(),
  listGuestUseCase: new ListGuestUseCase(),
  removeGuestUseCase: new RemoveGuestUseCase(),
  calculateInvoiceUseCase: new CalculateInvoiceUseCase(),
  parseExpenseDocumentUseCase: new ParseExpenseDocumentUseCase()
}
