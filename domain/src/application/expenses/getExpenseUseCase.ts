import 'reflect-metadata'

import { inject, injectable } from 'inversify'

import ExpenseRepository from '../../repositories/ExpenseRepository.js'
import Types from '../../types.js'

@injectable()
export default class GetExpensesUseCase {
  repository: ExpenseRepository

  constructor (
  @inject(Types.Repository.Expense) repository: ExpenseRepository
  ) {
    this.repository = repository
  }

  async execute (id): Promise<ExpenseDto> {
    const entity = await this.repository.get(id)
    const dto = entity.flatten()

    return dto
  }
}
