import {useState} from 'react'

import {useRouter} from 'next/navigation.js'
import PropTypes from 'prop-types'

import DeleteIcon from '@mui/icons-material/Delete'
import {Checkbox, FormControlLabel} from '@mui/material'
import IconButton from '@mui/material/IconButton'

import routes from '../../../app/routes.js'
import ListCard from '../../ListCard/index.js'
import TextAmmount from '../../textAmmount/index.js'
import {formatPeriod} from '../../utils.js'

function Expenses({expenses, onExpenseAdded, onExpenseDeleted, onExpenseUpdated}) {
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
    <ListCard>
      <ListCard.Header>
        <ListCard.Title>Gastos</ListCard.Title>
        <ListCard.Action onClick={handleAdd}>Añadir</ListCard.Action>
      </ListCard.Header>
      <ListCard.Toolbar>
        <FormControlLabel
          control={<Checkbox checked={display} onChange={handleToogleHidden} />}
          label="Mostrar ocultos"
        />
      </ListCard.Toolbar>
      {hasExpenses && (
        <ListCard.List>
          {expensesDisplayed.map(expense => {
            const {id, name, ammount, period, paid} = expense
            return (
              <ListCard.Item
                onClick={() => {
                  handleUpdate(expense)
                }}
                primary={<TextAmmount name={name} ammount={ammount} paid={paid} />}
                secondary={formatPeriod(period)}
                secondaryAction={
                  <IconButton aria-label="delete-guest" onClick={() => onExpenseDeleted(id)}>
                    <DeleteIcon />
                  </IconButton>
                }
              ></ListCard.Item>
            )
          })}
        </ListCard.List>
      )}
    </ListCard>
  )
}

Expenses.propTypes = {
  expenses: PropTypes.array,
  onExpenseAdded: PropTypes.func,
  onExpenseDeleted: PropTypes.func,
  onExpenseUpdated: PropTypes.func
}

export default Expenses
