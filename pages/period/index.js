import {useEffect, useState} from 'react'

import {useCases} from 'home-expenses-domain'

import Timetable from '../../components/timetable/index.js'

const {getTimeTableUseCase} = useCases

export default function PeriodPage() {
  const [current, setCurrent] = useState({yearSpan: [], guests: []})

  useEffect(() => {
    getTimeTableUseCase.execute().then(result => {
      setCurrent(result)
    })
  }, [])
  return <Timetable {...current} />
}
