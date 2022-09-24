import Expense from "./Expenses";
import Period from "./Period";
import { MAY, JULY, SEPTEMBER } from "./months";

const electricity = new Expense(
  new Period({
    from: new Date(2022, MAY, 19),
    to: new Date(2022, JULY, 19)
  }),
  43.65,
  4
);

const bego = new Period({
  from: new Date(2022, JULY, 1),
  to: new Date(2022, SEPTEMBER, 30)
});

console.log("electricity for begoña", electricity.getExpense(bego));

const period = new Period({
  from: new Date(2022, MAY, 19),
  to: new Date(2022, MAY, 20)
});
console.log("aja", period.days());
