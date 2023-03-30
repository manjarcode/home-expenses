import {useEffect, useState} from 'react'

import PropTypes from 'prop-types'

import Input from '../input/index.js'

function DateInput({label, onChange, value}) {
  const [day, setDay] = useState()
  const [month, setMonth] = useState()
  const [year, setYear] = useState()

  useEffect(() => {
    if (value) {
      setDay(value.day)
      setMonth(value.month)
      setYear(value.year)
    }
  }, [value])

  useEffect(() => {
    onChange({year, month, day})
  }, [day, month, year, onChange])

  return (
    <div className="AddPeriod">
      <Input
        label={label}
        value={day}
        onChange={setDay}
        size="2"
        maxLength="2"
      />
      <Input onChange={setMonth} value={month} size="2" maxLength="2" />
      <Input onChange={setYear} value={year} size="4" maxLength="4" />
    </div>
  )
}

DateInput.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.instanceOf(Date)
}

export default DateInput
