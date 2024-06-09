import {DI, Types} from 'home-expenses-domain'
import {NextResponse} from 'next/server'

export async function GET(request, {params}) {
  const {id} = params

  const useCase = DI.get(Types.UseCase.GetExpenses)
  const expense = await useCase.execute(id)
  return NextResponse.json(expense, {status: 200})
}

export async function DELETE(request, {params}) {
  const {id} = params

  const useCase = DI.get(Types.UseCase.RemoveExpense)
  await useCase.execute(id)

  return NextResponse.json({})
}
