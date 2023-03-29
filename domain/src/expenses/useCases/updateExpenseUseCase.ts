import ExpenseEntity from '../entities/ExpensesEntity.js'
import ExpenseRepository from '../repositories/ExpenseRepository.js'

export default class UpdateExpenseUseCase {
  private readonly expenseRepository: ExpenseRepository
  constructor () {
    this.expenseRepository = new ExpenseRepository()
  }

  async execute (expense: ExpenseEntity): Promise<void> {
    await this.expenseRepository.update(expense)
  }
}
