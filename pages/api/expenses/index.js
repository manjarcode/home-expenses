import {HTTP_STATUS} from 'home-expenses-domain/lib/config/index.js'
import ExpenseService from 'home-expenses-services/expenses/expenseService.js'

const ACTION_BY_METHOD = {
  [HTTP_STATUS.GET]: list,
  [HTTP_STATUS.POST]: add,
  [HTTP_STATUS.DELETE]: remove,
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

async function add({expenseService, id, name, ammount, paid, from, to}) {
  return expenseService.add({id, name, ammount, paid, from, to})
}

async function list({expenseService}) {
  return expenseService.list()
}

async function remove({expenseService, id}) {
  return expenseService.delete({id})
}

async function update({expenseService, id, name, ammount, paid, from, to}) {
  return expenseService.update({id, name, ammount, paid, from, to})
}
