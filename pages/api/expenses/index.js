import {useCases} from 'home-expenses-domain'
import {HTTP_STATUS} from 'home-expenses-domain/lib/config/index.js'
import ExpenseService from 'home-expenses-services/expenses/expenseService.js'

const ACTION_BY_METHOD = {
  [HTTP_STATUS.GET]: list,
  [HTTP_STATUS.POST]: add,
  [HTTP_STATUS.PUT]: update
}

export default async function handler(req, res) {
  const expenseService = new ExpenseService()

  const action = ACTION_BY_METHOD[req.method]

  const {body} = req

  const promise = action && action({expenseService, ...body})

  const result = await promise

  res.status(200).json(result)
}

async function add({id, name, ammount, paid, period}) {
  const {addExpenseUseCase} = useCases
  return addExpenseUseCase.execute({id, name, ammount, paid, period})
}

async function list() {
  const {listExpensesUseCase} = useCases
  return listExpensesUseCase.execute()
}

async function update({id, name, ammount, paid, period}) {
  const {updateExpenseUseCase} = useCases
  return updateExpenseUseCase.execute({id, name, ammount, paid, period})
}
