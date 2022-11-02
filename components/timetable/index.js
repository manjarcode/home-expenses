import * as MONTH from 'home-expenses-domain/months.js'
import PropTypes from 'prop-types'

import styles from './index.module.scss'

const Years = props => {
  return <div className={styles.years} {...props} />
}

const Year = ({year, children}) => {
  return (
    <div className={styles.year}>
      <div>{year}</div>
      <div className={styles.yearContent}>{children}</div>
    </div>
  )
}

Year.propTypes = {
  year: PropTypes.number,
  children: PropTypes.node
}

const monthDictionary = {
  [MONTH.JANUARY]: 'ene',
  [MONTH.FEBRUARY]: 'feb',
  [MONTH.MARCH]: 'mar',
  [MONTH.APRIL]: 'abr',
  [MONTH.MAY]: 'may',
  [MONTH.JUNE]: 'jun',
  [MONTH.JULY]: 'jul',
  [MONTH.AUGUST]: 'ago',
  [MONTH.SEPTEMBER]: 'sep',
  [MONTH.OCTOBER]: 'oct',
  [MONTH.NOVEMBER]: 'nov',
  [MONTH.DECEMBER]: 'dec'
}

const Month = ({value}) => {
  const month = `month-${value}`
  return <div className={styles[month]}>{monthDictionary[value]}</div>
}

Month.propTypes = {
  value: PropTypes.number
}

const WIDTH_PER_DAY = 5

const GuestList = ({totalDays, children}) => {
  const width = totalDays * WIDTH_PER_DAY
  return (
    <div className={styles.calendar} style={{width}}>
      {children}
    </div>
  )
}
GuestList.propTypes = {
  totalDays: PropTypes.number,
  children: PropTypes.node
}

const Room = props => <div className={styles.room} {...props} />

const Line = ({from, to, children}) => {
  const left = from * WIDTH_PER_DAY
  const width = (to - from) * WIDTH_PER_DAY
  return (
    <div className={styles.line} style={{left}}>
      <div className={styles.lineContent} style={{width}}>
        {children}
      </div>
    </div>
  )
}

Line.propTypes = {
  from: PropTypes.number,
  to: PropTypes.number,
  children: PropTypes.node
}

export default function Timetable({guests, yearSpan}) {
  return (
    <div className={styles.timetable}>
      <GuestList totalDays={205}>
        {guests.map(({from, to, name}) => (
          <Room key={name}>
            <Line from={from} to={to}>
              {name}
            </Line>
          </Room>
        ))}
      </GuestList>
      <Years>
        {yearSpan.map(({year, months}) => (
          <Year year={year} key={year}>
            {months.map(value => (
              <Month value={value} key={value} />
            ))}
          </Year>
        ))}
      </Years>
    </div>
  )
}

Timetable.propTypes = {
  guests: PropTypes.array,
  yearSpan: PropTypes.array
}
