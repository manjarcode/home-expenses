import {useState} from 'react'

import {useRouter} from 'next/navigation.js'
import PropTypes from 'prop-types'

import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'

import routes from '../../../app/routes.js'
import Checkbox from '../../form/checkbox/checkbox.js'
import ListCardResponsive from '../../layout/listCardResponsive/listCardResponsive.js'
import TextAmount from '../../textAmount/index.js'
import {formatPeriod} from '../../utils.js'

function ExpenseList({expenses, onExpenseDeleted}) {
  const [display, setDisplay] = useState(false)
  const router = useRouter()

  const hasExpenses = Array.isArray(expenses) && expenses.length > 0
  const expensesDisplayed = display ? expenses : expenses.filter(expense => !expense.paid)

  const handleAdd = () => {
    router.push(routes.expense.add())
  }

  const handleUpdate = expense => {
    router.push(routes.expense.edit(expense.id))
  }

  const handleToogleHidden = () => {
    setDisplay(display => !display)
  }

  return (
    <ListCardResponsive title="Gastos" action="Añadir" onAction={handleAdd}>
      <Checkbox label="Mostrar ocultos" checked={display} onChange={handleToogleHidden} />
      {hasExpenses && (
        <ListCardResponsive.List>
          {expensesDisplayed.map(expense => {
            const {id, name, amount, period, paid} = expense
            return (
              <ListCardResponsive.Item
                onClick={() => {
                  handleUpdate(expense)
                }}
                primary={<TextAmount name={name} amount={amount} paid={paid} />}
                secondary={formatPeriod(period)}
                secondaryAction={
                  <IconButton aria-label="delete-guest" onClick={() => onExpenseDeleted(id)}>
                    <DeleteIcon />
                  </IconButton>
                }
              ></ListCardResponsive.Item>
            )
          })}
        </ListCardResponsive.List>
      )}
    </ListCardResponsive>
  )
}

ExpenseList.propTypes = {
  expenses: PropTypes.array,
  onExpenseDeleted: PropTypes.func
}

export default ExpenseList
