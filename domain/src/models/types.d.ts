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
  period: DetachedPeriod
  currently: boolean
}
