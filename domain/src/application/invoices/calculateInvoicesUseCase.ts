import InvoiceService from '../../domain/services/InvoiceService.js'
import ExpenseRepository from '../../repositories/ExpenseRepository.js'
import GuestRepository from '../../repositories/GuestRepository.js'

export default class CalculateInvoiceUseCase {
  private readonly expenseRepository: ExpenseRepository;
  private readonly guestRepository: GuestRepository;
  private readonly invoiceService: InvoiceService;

  constructor () {
    this.expenseRepository = new ExpenseRepository()
    this.guestRepository = new GuestRepository()
    this.invoiceService = new InvoiceService()
  }

  async execute (): Promise<InvoiceGuestDto[]> {
    const expenses = await this.expenseRepository.list()
    const guests = await this.guestRepository.list()

    const invoices = await this.invoiceService.calculate({ expenses, guests })
    return invoices.flatten()
  }
}
