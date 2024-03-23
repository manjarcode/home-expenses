import ExpenseParser from '../../repositories/ExpenseParser.js'

export default class ParseExpenseDocumentUseCase {
  private readonly expenseParser: ExpenseParser

  constructor () {
    this.expenseParser = new ExpenseParser()
  }

  async execute (buffer): Promise<ExpenseDto> {
    const expense = await this.expenseParser.parse(buffer)

    return expense.flatten()
  }
}
