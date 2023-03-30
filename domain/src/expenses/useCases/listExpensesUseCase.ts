import ExpenseEntity from '../entities/ExpensesEntity.js'
import ExpenseRepository from '../repositories/ExpenseRepository.js'

export default class ListExpensesUseCase {
  repository: ExpenseRepository

  constructor () {
    this.repository = new ExpenseRepository()
  }

  async execute (): Promise<ExpenseDto[]> {
    const entities = await this.repository.list()
    const dtos = entities.map((entity: ExpenseEntity) =>
      entity.toJSON())
    return dtos
  }
}
