import dayjs from 'dayjs'
import PropTypes from 'prop-types'

export default function DateCard({value}) {
  const date = new Date(value)
  const formatedDate = dayjs(date).format('DD/MM/YYYY')

  return <>{formatedDate}</>
}

DateCard.propTypes = {
  value: PropTypes.string
}
