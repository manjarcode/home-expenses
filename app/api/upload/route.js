'use server'
import {DI, Types} from 'home-expenses-domain'
import {NextResponse} from 'next/server'

export async function POST(request) {
  const data = await request.formData()
  const file = data.get('file')

  if (!file) {
    return NextResponse.json({success: false})
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  const useCase = DI.get(Types.UseCase.ParseExpense)

  const expense = await useCase.execute(buffer)

  return NextResponse.json({...expense})
}
