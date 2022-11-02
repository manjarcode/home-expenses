import {useEffect, useState} from 'react'

import GetTimeTableUseCase from 'home-expenses-domain/src/guests/useCases/getTimetableUseCase.js'

import Timetable from '../../components/timetable/index.js'

const useCase = new GetTimeTableUseCase()

export default function PeriodPage() {
  const [current, setCurrent] = useState({yearSpan: [], guests: []})

  useEffect(() => {
    useCase.execute().then(result => {
      setCurrent(result)
    })
  }, [])
  return <Timetable {...current} />
}
