const Types = {
  Repository: {
    Expense: Symbol('ExpenseRepository'),
    ExpenseParser: Symbol('ExpenseParser')
  },
  UseCase: {
    AddExpense: Symbol('AddExpenseUseCase'),
    GetExpenses: Symbol('GetExpensesUseCase'),
    ListExpenses: Symbol('ListExpenseUseCase'),
    ParseExpense: Symbol('ParseExpenseUseCase'),
    RemoveExpense: Symbol('RemoveExpense'),
    UpdateExpense: Symbol('UpdateExpense')
  }
}

export default Types
