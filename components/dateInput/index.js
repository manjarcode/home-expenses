import {useCallback, useEffect, useState} from 'react'

import PropTypes from 'prop-types'

import Input from '../input/index.js'

function DateInput({label, onChange, value}) {
  const [day, setDay] = useState()
  const [month, setMonth] = useState()
  const [year, setYear] = useState()

  useEffect(() => {
    if (value) {
      setDay(value.getDate())
      setMonth(value.getMonth() + 1)
      setYear(value.getFullYear())
    }
  }, [value])

  const isNumeric = useCallback((str, length) => {
    if (typeof str !== 'string') return false
    return !isNaN(str) && !isNaN(parseFloat(str)) && str.length === length
  }, [])

  useEffect(() => {
    const isValid =
      isNumeric(day, 2) && isNumeric(month, 2) && isNumeric(year, 4)

    if (isValid) {
      const date = new Date(parseInt(year), parseInt(month - 1), parseInt(day))
      onChange(date)
    }
  }, [day, month, year, isNumeric, onChange])

  const onChangeHandler = ({day, month, year}) => {
    day && setDay(day)
    month && setMonth(month)
    year && setYear(year)
  }

  return (
    <div className="AddPeriod">
      <Input
        label={label}
        value={day}
        onChange={value => onChangeHandler({day: value})}
        size="2"
        maxLength="2"
      />
      <Input
        onChange={value => onChangeHandler({month: value})}
        value={month}
        size="2"
        maxLength="2"
      />
      <Input
        onChange={value => onChangeHandler({year: value})}
        value={year}
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
