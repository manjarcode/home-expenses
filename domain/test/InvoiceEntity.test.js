import InvoiceEntity from '../InvoiceEntity.js'
import * as MONTH from '../months.js'
import {invoiceExpected} from './fixtures/invoiceExpected.js'
import Factory from './utils.js'

const feedInvoice = ({
  invoice,
  guest,
  expense,
  ammount,
  initialDate,
  times
}) => {
  const date = new Date(initialDate)

  for (let i = 0; i < times; i++) {
    invoice.addAmmount({guest, expense, ammount, date})
    date.setDate(date.getDate() + 1)
  }
}

describe('InvoiceEntity', () => {
  test('toJSON must return invoice information', () => {
    const invoice = new InvoiceEntity({
      id: 'f391b3e2-b9d8-4f46-9a38-e516682efa05'
    })

    feedInvoice({
      invoice,
      guest: 'Tyrion',
      expense: 'Electricity',
      ammount: 10,
      initialDate: Factory.date(2020, MONTH.MAY, 1),
      times: 5
    })

    feedInvoice({
      invoice,
      guest: 'Cersei',
      expense: 'Electricity',
      ammount: 10,
      initialDate: Factory.date(2020, MONTH.MAY, 1),
      times: 5
    })

    const invoiceData = invoice.toJSON()

    expect(invoiceData).toStrictEqual(invoiceExpected)
  })
})
