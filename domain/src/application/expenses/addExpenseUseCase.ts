import { buildExpense } from '../../domain/models/factory/expense.js'
import ExpenseRepository from '../../repositories/ExpenseRepository.js'

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
