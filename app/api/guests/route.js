import {useCases} from 'home-expenses-domain'
import {NextResponse} from 'next/server'

export async function GET() {
  const {listGuestUseCase} = useCases
  const list = await listGuestUseCase.execute()

  return NextResponse.json(list)
}

export async function POST(request) {
  const {id, name, period} = await request.json()
  const {addGuestUseCase} = useCases
  await addGuestUseCase.execute({id, name, period})
  return new Response(null, {status: 204})
}

export async function PUT(request) {
  const {id, name, period} = await request.json()
  const {updateGuestUseCase} = useCases
  await updateGuestUseCase.execute({id, name, period})
  return new Response(null, {status: 204})
}
