import ExpenseRepository from '../repositories/ExpenseRepository.js'

export default class RemoveExpenseUseCase {
  private readonly expenseRepository: ExpenseRepository
  constructor () {
    this.expenseRepository = new ExpenseRepository()
  }

  async execute (id: string): Promise<void> {
    await this.expenseRepository.delete(id)
  }
}
