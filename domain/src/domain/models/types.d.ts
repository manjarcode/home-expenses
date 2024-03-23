interface Entity {
  id: string
}

interface ExpenseDto {
  id: string
  name: string
  ammount: number
  paid: boolean
  period: DetachedPeriod
}

interface GuestDto {
  id: string
  name: string
  period: Period
  currently: boolean
}

interface InvoiceExpenseDto {
  expense: string
  days: number
  value: number
}

interface InvoiceGuestDto {
  name: string
  total: number
  expenses: InvoiceExpenseDto[]
}

interface TimetableGuestDto {
  name: string
  from: number
  to: number
}

interface YearSpan {
  year: number
  months: string[]
}

interface TimetableDto {
  guests: TimetableGuestDto[]
  yearSpan: YearSpan
}
