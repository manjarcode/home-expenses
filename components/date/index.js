import PropTypes from 'prop-types'

export default function Date({day, month, year}) {
  const paddedDay = padStart(day, 2)
  const paddedMonth = padStart(month, 2)
  const paddedYear = padStart(year, 4)

  return (
    <>
      {paddedDay}/{paddedMonth}/{paddedYear}
    </>
  )
}
const padStart = (value, length) => {
  return String(value).padStart(length, '0')
}

Date.propTypes = {
  day: PropTypes.number,
  month: PropTypes.number,
  year: PropTypes.number
}
