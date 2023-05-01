import PropTypes from 'prop-types'

import InputLabel from '@mui/material/InputLabel'
import TextField from '@mui/material/TextField'

import styles from './index.module.scss'

function DateInput({label, onChange, value: dateInputValue}) {
  const curryDispatch = key => ev => {
    const value = ev.target.value
    const delta = {[key]: value}

    const nextState = {...dateInputValue, ...delta}
    onChange(nextState)
  }

  const variant = 'outlined'
  const size = 'small'

  return (
    <div>
      <InputLabel className={styles.label}>{label}</InputLabel>
      <TextField
        placeholder="Día"
        value={dateInputValue.day}
        onChange={curryDispatch('day')}
        inputProps={{maxLength: 2, size: 3}}
        variant={variant}
        size={size}
      />
      <TextField
        placeholder="Mes"
        onChange={curryDispatch('month')}
        value={dateInputValue.month}
        inputProps={{maxLength: 2, size: 3}}
        variant={variant}
        size={size}
      />
      <TextField
        placeholder="Año"
        onChange={curryDispatch('year')}
        value={dateInputValue.year}
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
  value: PropTypes.instanceOf(Date)
}

export default DateInput
