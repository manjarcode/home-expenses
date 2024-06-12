import 'reflect-metadata'

import { inject, injectable } from 'inversify'

import ExpenseRepository from '../../repositories/ExpenseRepository.js'
import Types from '../../types.js'

@injectable()
export default class RemoveExpenseUseCase {
  private readonly repository: ExpenseRepository

  constructor (
  @inject(Types.Repository.Expense) repository: ExpenseRepository
  ) {
    this.repository = repository
  }

  async execute (id: string): Promise<void> {
    await this.repository.delete(id)
  }
}
