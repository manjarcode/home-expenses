import {useCases} from 'home-expenses-domain'
export default async function handler(req, res) {
  const {calculateInvoiceUseCase} = useCases

  const invoices = await calculateInvoiceUseCase.execute()

  res.status(200).json(invoices)
}
