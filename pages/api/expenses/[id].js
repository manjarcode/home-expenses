import {ExpenseService} from 'home-expenses-services/expenses/expenseService'

export default async function handler(req, res) {
  const {id} = req.query
  const expenseService = new ExpenseService()

  expenseService.delete({id})

  res.status(204).json({})
}
