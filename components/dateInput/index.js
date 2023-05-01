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

function DateInput({label, onChange, value}) {
  function reducer(state, {item, mustChange}) {
    const nextState = {...state, ...item}

    if (mustChange) {
      onChange(nextState)
    }
    return nextState
  }

  const [state, dispatch] = useReducer(reducer, value ?? emptyDate())

  useEffect(() => {
    const mustChange = false

    dispatch({item: value, mustChange})
  }, [value])

  const curryDispatch = key => value => {
    const item = {[key]: value}
    const mustChange = true
    dispatch({item, mustChange})
  }

  return (
    <div className="AddPeriod">
      <Input
        label={label}
        value={state.day}
        onChange={curryDispatch('day')}
        size="2"
        maxLength="2"
      />
      <Input
        onChange={curryDispatch('month')}
        value={state.month}
        size="2"
        maxLength="2"
      />
      <Input
        onChange={curryDispatch('year')}
        value={state.year}
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
