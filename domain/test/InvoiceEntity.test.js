import InvoiceEntity from '../lib/invoices/entities/InvoiceEntity.js'
import {invoiceExpected} from './fixtures/invoiceExpected.js'

describe('InvoiceEntity', () => {
  test('toJSON must return invoice information', () => {
    const invoice = new InvoiceEntity({
      id: 'f391b3e2-b9d8-4f46-9a38-e516682efa05'
    })

    invoice.addAmmount('Tyrion', 'Electricity', 50, 5)

    invoice.addAmmount('Cersei', 'Electricity', 50, 5)

    const invoiceData = invoice.toJSON()

    expect(invoiceData).toStrictEqual(invoiceExpected)
  })
})
