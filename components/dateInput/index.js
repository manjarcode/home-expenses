import {useEffect, useReducer} from 'react'

import PropTypes from 'prop-types'

import Input from '../input/index.js'

function emptyDate() {
  return {
    day: '',
    month: '',
    year: ''
  }
}

function DateInput({label, onChange, value: initialValue}) {
  function mutator(state, {item, mustChange}) {
    const nextState = {...state, ...item}

    if (mustChange) {
      onChange(nextState)
    }
    return nextState
  }

  const [value, mutate] = useReducer(mutator, initialValue ?? emptyDate())

  useEffect(() => {
    const mustChange = false

    mutate({item: initialValue, mustChange})
  }, [initialValue])

  const curryDispatch = key => value => {
    const item = {[key]: value}
    const mustChange = true
    mutate({item, mustChange})
  }

  return (
    <div className="AddPeriod">
      <Input
        label={label}
        value={value.day}
        onChange={curryDispatch('day')}
        size="2"
        maxLength="2"
      />
      <Input
        onChange={curryDispatch('month')}
        value={value.month}
        size="2"
        maxLength="2"
      />
      <Input
        onChange={curryDispatch('year')}
        value={value.year}
        size="4"
        maxLength="4"
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
