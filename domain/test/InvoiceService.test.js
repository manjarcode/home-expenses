import InvoiceService from '../InvoiceService.js'
import * as MONTH from '../months.js'
import Factory from './utils.js'

describe('InvoiceService calculate invoice', () => {
  const may1 = Factory.date(2020, MONTH.MAY, 1)
  const may5 = Factory.date(2020, MONTH.MAY, 5)
  const may6 = Factory.date(2020, MONTH.MAY, 6)
  const may10 = Factory.date(2020, MONTH.MAY, 10)
  const may15 = Factory.date(2020, MONTH.MAY, 15)
  const may20 = Factory.date(2020, MONTH.MAY, 20)

  const calculate = (expenses, guests) => {
    const invoiceService = new InvoiceService()
    return invoiceService.calculate({expenses, guests})
  }

  describe('one guest one expense', () => {
    test('guest stays half period must pay half ammount', () => {
      const tyrion = Factory.guest(
        'b7df1750-9fac-4b3c-8ab0-4547e4ee4b37',
        'Tyrion',
        may1,
        may5
      )
      const electricity = Factory.expense('Electricity', may1, may10, 100)

      const invoice = calculate([electricity], [tyrion])

      expect(invoice.byGuest('Tyrion')).toBe(50)
    })

    test('guest with half period of intersection must pay half ammount', () => {
      const tyrion = Factory.guest('Tyrion', may1, may10)
      const electricity = Factory.expense('Electricity', may6, may15, 100)

      const invoice = calculate([electricity], [tyrion])

      expect(invoice.byGuest('Tyrion')).toBe(50)
    })

    test('guest without intersection must pay nothing', () => {
      const tyrion = Factory.guest('Tyrion', may1, may5)
      const electricity = Factory.expense('Electricity', may6, may15, 100)

      const invoice = calculate([electricity], [tyrion])

      expect(invoice.byGuest('Tyrion')).toBe(0)
    })
  })

  describe('one guest two expenses', () => {
    test('guest stays full period must pay all ammount', () => {
      const tyrion = Factory.guest('Tyrion', may1, may10)
      const electricity = Factory.expense('Electricity', may1, may10, 100)
      const gas = Factory.expense('Gas', may1, may10, 100)

      const invoice = calculate([electricity, gas], [tyrion])

      expect(invoice.byGuest('Tyrion')).toBe(200)
    })

    test('guest stays half period must pay half ammount', () => {
      const tyrion = Factory.guest('Tyrion', may1, may5)
      const electricity = Factory.expense('Electricity', may1, may10, 100)
      const gas = Factory.expense('Gas', may1, may10, 100)

      const invoice = calculate([electricity, gas], [tyrion])

      expect(invoice.byGuest('Tyrion')).toBe(100)
    })
  })

  describe('two guests one expense', () => {
    test('guests meeting same period must split payment equally', () => {
      const tyrion = Factory.guest('Tyrion', may1, may10)
      const cersei = Factory.guest('Cersei', may1, may10)

      const electricity = Factory.expense('Electricity', may1, may10, 100)

      const invoice = calculate([electricity], [tyrion, cersei])

      expect(invoice.byGuest('Tyrion')).toBe(50)
      expect(invoice.byGuest('Cersei')).toBe(50)
    })

    test('guests not meeting but same number of days must split payment equally', () => {
      const tyrion = Factory.guest('Tyrion', may1, may5)
      const cersei = Factory.guest('Cersei', may6, may10)

      const electricity = Factory.expense('Electricity', may1, may10, 100)

      const invoice = calculate([electricity], [tyrion, cersei])

      expect(invoice.byGuest('Tyrion')).toBe(50)
      expect(invoice.byGuest('Cersei')).toBe(50)
    })
  })

  describe('two guests two expenses', () => {
    test('guest meeting same period must split payment equally', () => {
      const tyrion = Factory.guest('Tyrion', may1, may10)
      const cersei = Factory.guest('Cersei', may1, may10)

      const electricity = Factory.expense('Electricity', may1, may10, 100)
      const gas = Factory.expense('Gas', may1, may10, 100)

      const invoice = calculate([electricity, gas], [tyrion, cersei])

      expect(invoice.byGuest('Tyrion')).toBe(100)
      expect(invoice.byGuest('Cersei')).toBe(100)
    })

    test('guest meeting different periods pay different ammount', () => {
      const tyrion = Factory.guest('Tyrion', may1, may10)
      const cersei = Factory.guest('Cersei', may6, may15)

      const electricity = Factory.expense('Electricity', may1, may10, 100)
      const gas = Factory.expense('Gas', may1, may20, 200)

      const invoice = calculate([electricity, gas], [tyrion, cersei])

      expect(invoice.byGuest('Tyrion')).toBe(150)
      expect(invoice.byGuest('Cersei')).toBe(100)
    })
  })
})
