import ExpenseParser from '../../repositories/ExpenseParser.js'

export default class ParseInvoiceDocumentUseCase {
  private readonly expenseParser: ExpenseParser

  constructor () {
    this.expenseParser = new ExpenseParser()
  }

  async execute (buffer): Promise<void> {
    await this.expenseParser.parse(buffer)
  }
}
