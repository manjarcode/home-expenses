import PropTypes from 'prop-types'

import Input from '../input/index.js'

function DateInput({label, onChange, value: dateInputValue}) {
  const curryDispatch = key => value => {
    const delta = {[key]: value}

    const nextState = {...dateInputValue, ...delta}
    onChange(nextState)
  }

  return (
    <div className="AddPeriod">
      <Input
        label={label}
        value={dateInputValue.day}
        onChange={curryDispatch('day')}
        size="2"
        maxLength="2"
      />
      <Input
        onChange={curryDispatch('month')}
        value={dateInputValue.month}
        size="2"
        maxLength="2"
      />
      <Input
        onChange={curryDispatch('year')}
        value={dateInputValue.year}
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
