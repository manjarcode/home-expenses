// import Expense from '../domain/models/Expense.js'
import PdfReader from './PdfReader.js'

export default class ExpenseParser {
  private readonly pdfReader: PdfReader

  constructor () {
    this.pdfReader = new PdfReader()
  }

  async parse (buffer): Promise<void> {
    const text = await this.pdfReader.process(buffer)

    const lines = text.split('\n')

    const keyLine = lines.find(line => line.includes('IMPORTE DE'))

    console.log('keyLine', keyLine)
  }
}
