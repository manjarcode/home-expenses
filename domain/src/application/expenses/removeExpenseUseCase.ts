import 'reflect-metadata'
import { injectable, inject } from 'inversify'
import Types from '../../types.js'
import ExpenseRepository from '../../repositories/ExpenseRepository.js'

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
