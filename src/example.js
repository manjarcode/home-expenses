import ExpenseEntity from './domain/ExpensesEntity.js'
import GuestEntity from './domain/GuestEntity.js'
import JanderAggregate from './domain/JanderAggregate.js'
import Period from './domain/PeriodValueObject.js'
import * as MONTH from './months.js'

const electricity = new ExpenseEntity({
  name: 'Electricity',
  period: new Period({
    from: new Date(2022, MONTH.MAY, 19),
    to: new Date(2022, MONTH.JULY, 19)
  }),
  ammount: 43.65,
  split: 4
})

const bego = new GuestEntity({
  name: 'Begoña',
  period: new Period({
    from: new Date(2022, MONTH.JULY, 1),
    to: new Date(2022, MONTH.SEPTEMBER, 30)
  })
})

const maria = new GuestEntity({
  name: 'Maria',
  period: new Period({
    from: new Date(2022, MONTH.JUNE, 1),
    to: new Date(2022, MONTH.SEPTEMBER, 30)
  })
})

const jander = new JanderAggregate({
  expenses: [electricity],
  guests: [bego, maria]
})

jander.calcultate()
