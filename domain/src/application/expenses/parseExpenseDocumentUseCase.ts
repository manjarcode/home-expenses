import 'reflect-metadata'

import { inject, injectable } from 'inversify'

import ExpenseParser from '../../repositories/ExpenseParser.js'
import Types from '../../types.js'

@injectable()
export default class ParseExpenseDocumentUseCase {
  private readonly parser: ExpenseParser

  constructor (
  @inject(Types.Repository.ExpenseParser) parser: ExpenseParser
  ) {
    this.parser = parser
  }

  async execute (buffer): Promise<ExpenseDto> {
    const expense = await this.parser.parse(buffer)

    return expense.flatten()
  }
}
