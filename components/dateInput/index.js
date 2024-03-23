import {useState} from 'react'

import PropTypes from 'prop-types'

import InputLabel from '@mui/material/InputLabel'
import TextField from '@mui/material/TextField'

import styles from './index.module.scss'

const emptyDate = {day: null, month: null, year: null}
function DateInput({label, onChange, initialValue = emptyDate}) {
  const [date, setDate] = useState(initialValue)

  const curryDispatch = key => ev => {
    const value = ev.target.value

    const delta = {[key]: value}
    const nextState = {...date, ...delta}

    const parsedDate = parseDate(nextState)
    setDate(nextState)
    onChange(parsedDate)
  }

  const parseDate = nextState => {
    const {day, month, year} = nextState
    const parsedDay = safeParseInt(day)
    const parsedMonth = safeParseInt(month)
    const parsedYear = safeParseInt(year)
    return {day: parsedDay, month: parsedMonth, year: parsedYear}
  }

  const safeParseInt = value => {
    try {
      return parseInt(value)
    } catch {
      return null
    }
  }

  const variant = 'outlined'
  const size = 'small'

  return (
    <div>
      <InputLabel className={styles.label}>{label}</InputLabel>
      <TextField
        placeholder="Día"
        value={date.day}
        onChange={curryDispatch('day')}
        inputProps={{maxLength: 2, size: 3}}
        variant={variant}
        size={size}
      />
      <TextField
        placeholder="Mes"
        onChange={curryDispatch('month')}
        value={date.month}
        inputProps={{maxLength: 2, size: 3}}
        variant={variant}
        size={size}
      />
      <TextField
        placeholder="Año"
        onChange={curryDispatch('year')}
        value={date.year}
        inputProps={{maxLength: 4, size: 4}}
        variant={variant}
        size={size}
      />
    </div>
  )
}

DateInput.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  initialValue: PropTypes.instanceOf(Date)
}

export default DateInput
