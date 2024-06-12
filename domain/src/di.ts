import { Container } from 'inversify'

import AddExpenseUseCase from './application/expenses/addExpenseUseCase.js'
import GetExpensesUseCase from './application/expenses/getExpenseUseCase.js'
import ListExpensesUseCase from './application/expenses/listExpensesUseCase'
import ParseExpenseDocumentUseCase from './application/expenses/parseExpenseDocumentUseCase.js'
import RemoveExpenseUseCase from './application/expenses/removeExpenseUseCase.js'
import UpdateExpenseUseCase from './application/expenses/updateExpenseUseCase.js'
import ExpenseParser from './repositories/ExpenseParser.js'
import ExpenseRepository from './repositories/ExpenseRepository.js'
import Types from './types.js'

const DI = new Container()

DI.bind(Types.Repository.Expense).to(ExpenseRepository)
DI.bind(Types.Repository.ExpenseParser).to(ExpenseParser)

DI.bind(Types.UseCase.AddExpense).to(AddExpenseUseCase)
DI.bind(Types.UseCase.GetExpenses).to(GetExpensesUseCase)
DI.bind(Types.UseCase.ListExpenses).to(ListExpensesUseCase)
DI.bind(Types.UseCase.ParseExpense).to(ParseExpenseDocumentUseCase)
DI.bind(Types.UseCase.RemoveExpense).to(RemoveExpenseUseCase)
DI.bind(Types.UseCase.UpdateExpense).to(UpdateExpenseUseCase)

export default DI
