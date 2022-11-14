import InvoiceEntity from '../lib/invoices/entities/InvoiceEntity.js'
import {invoiceExpected} from './fixtures/invoiceExpected.js'

describe('InvoiceEntity', () => {
  test('toJSON must return invoice information', () => {
    const invoice = new InvoiceEntity({
      id: 'f391b3e2-b9d8-4f46-9a38-e516682efa05'
    })

    invoice.addAmmount({
      guest: 'Tyrion',
      expense: 'Electricity',
      ammount: 50,
      days: 5
    })

    invoice.addAmmount({
      guest: 'Cersei',
      expense: 'Electricity',
      ammount: 50,
      days: 5
    })

    const invoiceData = invoice.toJSON()

    expect(invoiceData).toStrictEqual(invoiceExpected)
  })
})
