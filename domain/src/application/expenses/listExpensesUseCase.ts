import "reflect-metadata"
import { injectable, inject } from 'inversify'
import Types from '../../types.js'
import Expense from '../../domain/models/Expense.js'
import ExpenseRepository from '../../repositories/ExpenseRepository.js'


@injectable()
export default class ListExpensesUseCase {
  repository: ExpenseRepository

  constructor (
    @inject(Types.Repository.Expense) repository: ExpenseRepository
  ) {
    this.repository = repository
  }

  async execute (): Promise<ExpenseDto[]> {
    const entities = await this.repository.list()
    const dtos = entities.map((entity: Expense) =>
      entity.flatten())

    return dtos
  }
}
