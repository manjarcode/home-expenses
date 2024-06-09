import {DI, Types} from 'home-expenses-domain'
import {NextResponse} from 'next/server'

export async function GET() {
  const usecase = DI.get(Types.UseCase.ListExpenses)

  const expenses = await usecase.execute()

  return NextResponse.json(expenses)
}

export async function POST(request) {
  const {id, name, amount, paid, period} = await request.json()

  const usecase = DI.get(Types.UseCase.AddExpense)
  await usecase.execute({id, name, amount, paid, period})

  return NextResponse.json({})
}

export async function PUT(request) {
  const {id, name, amount, paid, period} = await request.json()

  const usecase = DI.get(Types.UseCase.UpdateExpense)
  await usecase.execute({id, name, amount, paid, period})

  return NextResponse.json({})
}
