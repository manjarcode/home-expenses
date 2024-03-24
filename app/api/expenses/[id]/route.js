import {useCases} from 'home-expenses-domain'
import {NextResponse} from 'next/server'

export async function GET(request, {params}) {
  const {id} = params

  const {getExpenseUseCase} = useCases

  const expense = await getExpenseUseCase.execute(id)

  return NextResponse.json(expense, {status: 200})
}

export async function DELETE(request, {params}) {
  const {id} = params

  const {removeExpenseUseCase} = useCases

  await removeExpenseUseCase.execute(id)

  return NextResponse.json({})
}
