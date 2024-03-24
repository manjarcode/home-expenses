import Expense from '../../domain/models/Expense.js'
import ExpenseRepository from '../../repositories/ExpenseRepository.js'

export default class UpdateExpenseUseCase {
  private readonly expenseRepository: ExpenseRepository
  constructor () {
    this.expenseRepository = new ExpenseRepository()
  }

  async execute (expense: ExpenseDto): Promise<void> {
    const expenseEntity = Expense.fromDto(expense)
    await this.expenseRepository.update(expenseEntity)
  }
}
