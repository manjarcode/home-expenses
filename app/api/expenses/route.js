import {useCases} from 'home-expenses-domain'
import {NextResponse} from 'next/server'

export async function GET() {
  const {listExpensesUseCase} = useCases
  const expenses = await listExpensesUseCase.execute()

  return NextResponse.json(expenses)
}

export async function POST(request) {
  const {id, name, amount, paid, period} = await request.json()

  const {addExpenseUseCase} = useCases
  await addExpenseUseCase.execute({id, name, amount, paid, period})

  return NextResponse.json({})
}

export async function PUT(request) {
  const {id, name, amount, paid, period} = await request.json()

  const {updateExpenseUseCase} = useCases
  await updateExpenseUseCase.execute({id, name, amount, paid, period})

  return NextResponse.json({})
}
