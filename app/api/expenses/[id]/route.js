import {useCases} from 'home-expenses-domain'
import {NextResponse} from 'next/server'

export async function DELETE(request, {params}) {
  const {id} = params

  const {removeExpenseUseCase} = useCases

  await removeExpenseUseCase.execute(id)

  return NextResponse.json({})
}
