import ExpenseRepository from '../../expenses/repositories/ExpenseRepository.js'
import { buildExpense } from '../../models/factory/expense.js'

export default class AddExpenseUseCase {
  private readonly expenseRepository: ExpenseRepository;

  constructor () {
    this.expenseRepository = new ExpenseRepository()
  }

  async execute (expense: ExpenseDto): Promise<void> {
    const { id, name, ammount, paid, period } = expense
    const expenseEntity = buildExpense(id, name, ammount, paid, period)
    return await this.expenseRepository.add(expenseEntity)
  }
}
