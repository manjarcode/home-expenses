import 'reflect-metadata'

import { inject, injectable } from 'inversify'

import Expense from '../../domain/models/Expense.js'
import ExpenseRepository from '../../repositories/ExpenseRepository.js'
import Types from '../../types.js'

@injectable()
export default class AddExpenseUseCase {
  private readonly expenseRepository: ExpenseRepository;

  constructor (
  @inject(Types.Repository.Expense) repository: ExpenseRepository
  ) {
    this.expenseRepository = repository
  }

  async execute (expense: ExpenseDto): Promise<void> {
    const expenseEntity = Expense.fromDto(expense)
    return await this.expenseRepository.add(expenseEntity)
  }
}
