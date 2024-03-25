import Invoice from '../lib/domain/models/Invoice.js'
import {invoiceExpected} from './fixtures/invoiceExpected.js'

describe('InvoiceEntity', () => {
  test('flatten must return invoice information', () => {
    const invoice = new Invoice({
      id: 'f391b3e2-b9d8-4f46-9a38-e516682efa05'
    })

    invoice.addAmount('Tyrion', 'Electricity', 50, 5)

    invoice.addAmount('Cersei', 'Electricity', 50, 5)

    const invoiceData = invoice.flatten()

    expect(invoiceData).toStrictEqual(invoiceExpected)
  })
})
