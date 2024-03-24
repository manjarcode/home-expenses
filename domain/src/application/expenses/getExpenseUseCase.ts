import Expense from '../../domain/models/Expense.js'
import ExpenseRepository from '../../repositories/ExpenseRepository.js'

export default class GetExpensesUseCase {
  repository: ExpenseRepository

  constructor () {
    this.repository = new ExpenseRepository()
  }

  async execute(id): Promise<ExpenseDto> {
    const entity = await this.repository.get(id)
    const dto = entity.flatten()

    return dto
  }
}
