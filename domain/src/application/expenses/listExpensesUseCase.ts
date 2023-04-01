import Expense from '../../domain/models/Expense.js'
import ExpenseRepository from '../../repositories/ExpenseRepository.js'

export default class ListExpensesUseCase {
  repository: ExpenseRepository

  constructor () {
    this.repository = new ExpenseRepository()
  }

  async execute (): Promise<ExpenseDto[]> {
    const entities = await this.repository.list()
    const dtos = entities.map((entity: Expense) =>
      entity.toJSON())
    return dtos
  }
}
