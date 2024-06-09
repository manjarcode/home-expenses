import "reflect-metadata"
import { inject, injectable } from 'inversify'
import Types from '../../types.js'
import Expense from '../../domain/models/Expense.js'
import ExpenseRepository from '../../repositories/ExpenseRepository.js'

@injectable()
export default class UpdateExpenseUseCase {
  private readonly repository: ExpenseRepository
  constructor (
    @inject(Types.Repository.Expense) repository: ExpenseRepository
  ) {
    this.repository = repository
  }

  async execute (expense: ExpenseDto): Promise<void> {
    const expenseEntity = Expense.fromDto(expense)
    await this.repository.update(expenseEntity)
  }
}
