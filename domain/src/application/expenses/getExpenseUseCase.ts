import "reflect-metadata"
import { injectable, inject } from "inversify"
import Types from '../../types.js'
import ExpenseRepository from '../../repositories/ExpenseRepository.js'

@injectable()
export default class GetExpensesUseCase {
  repository: ExpenseRepository

  constructor (
    @inject(Types.Repository.Expense) repository: ExpenseRepository
  ) {
    this.repository = repository
  }

  async execute(id): Promise<ExpenseDto> {
    const entity = await this.repository.get(id)
    const dto = entity.flatten()

    return dto
  }
}
