import ExpenseEntity from '../entities/ExpensesEntity.js'
import ExpenseRepository from '../repositories/ExpenseRepository.js'

export default class ListExpensesUseCase {
  repository: ExpenseRepository

  constructor () {
    this.repository = new ExpenseRepository()
  }

  async execute (): Promise<ExpenseEntity> {
    return await this.repository.list()
  }
}
