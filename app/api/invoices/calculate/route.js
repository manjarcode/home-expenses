import {useCases} from 'home-expenses-domain'
import {NextResponse} from 'next/server'

export async function GET(request) {
  const {calculateInvoiceUseCase} = useCases

  const invoices = await calculateInvoiceUseCase.execute()

  return NextResponse.json(invoices)
}
