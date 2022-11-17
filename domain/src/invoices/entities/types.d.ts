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
