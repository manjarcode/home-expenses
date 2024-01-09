import { v4 as uuid } from 'uuid'

import Expense from '../domain/models/Expense.js'
import Period from '../domain/models/Period.js'
import PdfReader from './PdfReader.js'
import { parseDate } from '../utils/date.js'

const EMPTY = ''

export default class ExpenseParser {
  private readonly pdfReader: PdfReader

  constructor () {
    this.pdfReader = new PdfReader()
  }

  async parse (buffer): Promise<Expense> {
    const text = await this.pdfReader.process(buffer)

    const lines = text.split('\n')

    const firstKeyLine = this.getFirstKeyLine(lines)
    const name = this.parseExpenseName(firstKeyLine)
    const ammount = this.parseExpenseAmount(firstKeyLine)

    const period = this.parsePeriod(name, lines)

    const id = uuid()
    const paid = false
    const expense = new Expense({
      id,
      name,
      period,
      ammount,
      paid
    })

    return expense
  }

  private getFirstKeyLine (lines: string[]): string {
    const EXPENSE_KEY_TEXT = 'IMPORTE DE'    
    return lines.find(line => line.includes(EXPENSE_KEY_TEXT)) ?? EMPTY
  }

  private parseExpenseName (firstKeyLine): string {
    const EXPENSE_NAME_REGEX = /IMPORTE DE ([a-zA-Z\s]+) \d/
    const EXPENSE_NAME_MATCH_POSITION = 1
    const WRONG_EXPENSE_NAME = 'CALEFACCION'
    const CORRECT_EXPENSE_NAME = 'CALEFACCIÓN'

    const result = EXPENSE_NAME_REGEX.exec(firstKeyLine)

    const hasExpenseResult = Array.isArray(result) && result.length > EXPENSE_NAME_MATCH_POSITION
    const expenseName = hasExpenseResult ? result[EXPENSE_NAME_MATCH_POSITION] : EMPTY

    const applyFixName = expenseName.replace(WRONG_EXPENSE_NAME, CORRECT_EXPENSE_NAME)
    return applyFixName
  }

  private parseExpenseAmount (firstKeyLine): string {
    const EXPENSE_AMOUNT_REGEX = /([\d,]+) €$/
    const EXPENSE_AMOUNT_MATCH_POSITION = 1

    const result = EXPENSE_AMOUNT_REGEX.exec(firstKeyLine)
    const hasExpenseResult = Array.isArray(result) && result.length > EXPENSE_AMOUNT_MATCH_POSITION
    const expenseAmount = hasExpenseResult ? result[EXPENSE_AMOUNT_MATCH_POSITION] : EMPTY

    return expenseAmount
  }

  private parsePeriod (expenseName: string, lines: string[]): Period {
    const MATCH_POSITION = 0
    const DATE_REGEX = /\d{2}\/\d{2}\/\d{4}/g
    const keyLine = lines.find(line => line.startsWith(expenseName)) ?? EMPTY
    const matches = keyLine.matchAll(DATE_REGEX)
    const [fromString, toString] = Array.from(matches, match => match[MATCH_POSITION])

    const from = parseDate(fromString)
    const to = parseDate(toString)
    return new Period({ from, to, currently: false })
  }
}
