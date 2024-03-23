import {useCases} from 'home-expenses-domain'
import {NextResponse} from 'next/server'

export async function GET(request, {params}) {
  const {id} = params

  const {getGuestUseCase} = useCases

  const guest = await getGuestUseCase.execute(id)

  return NextResponse.json(guest, {status: 200})
}

export async function DELETE(request, {params}) {
  const {id} = params

  const {removeGuestUseCase} = useCases

  await removeGuestUseCase.execute(id)

  return new Response(null, {status: 204})
}
