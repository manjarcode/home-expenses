import * as MONTH from '../../months.js'
import InvoiceService from '../InvoiceService.js'
import Factory from './utils.js'

describe('InvoiceService', () => {
  const may1 = Factory.date(2020, MONTH.MAY, 1)
  const may5 = Factory.date(2020, MONTH.MAY, 5)
  const may6 = Factory.date(2020, MONTH.MAY, 6)
  const may10 = Factory.date(2020, MONTH.MAY, 10)
  const invoiceService = new InvoiceService()

  test('should be half for 2 guest not meeting but same days', () => {
    const tyrion = Factory.guest('Tyrion', may1, may5)
    const cersei = Factory.guest('Cersei', may6, may10)

    const electricity = Factory.expense('Electricity', may1, may10, 100)

    const invoice = invoiceService.calculate({
      expenses: [electricity],
      guests: [tyrion, cersei]
    })

    expect(invoice.byGuest('Tyrion').total).toBe(50)
    expect(invoice.byGuest('Cersei').total).toBe(50)
  })

  test('should be half for 2 guest meeting same days', () => {
    const tyrion = Factory.guest('Tyrion', may1, may10)
    const cersei = Factory.guest('Cersei', may1, may10)

    const electricity = Factory.expense('Electricity', may1, may10, 100)

    const invoice = invoiceService.calculate({
      expenses: [electricity],
      guests: [tyrion, cersei]
    })

    expect(invoice.byGuest('Tyrion').total).toBe(50)
    expect(invoice.byGuest('Cersei').total).toBe(50)
  })
})
