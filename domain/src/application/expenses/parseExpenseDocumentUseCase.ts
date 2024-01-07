import Expense from '../../domain/models/Expense.js'
import ExpenseParser from '../../repositories/ExpenseParser.js'

export default class ParseExpenseDocumentUseCase {
  private readonly expenseParser: ExpenseParser

  constructor () {
    this.expenseParser = new ExpenseParser()
  }

  async execute (buffer): Promise<Expense> {
    const expense = await this.expenseParser.parse(buffer)

    return expense
  }
}
