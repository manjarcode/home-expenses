import {useEffect, useState} from 'react'

import {useParams, useRouter} from 'next/navigation'

import useGuests from '../../../../hooks/useGuests.js'
import routes from '../../../routes.js'

export default function ViewModel() {
  const [guest, setGuest] = useState()
  const {id} = useParams()
  const {get, update} = useGuests()
  const router = useRouter()

  useEffect(() => {
    if (!id) return
    get(id).then(setGuest)
  }, [get, id])

  const handleAccept = async item => {
    await update(item)
    router.push(routes.home())
  }

  const handleCancel = () => {
    router.push(routes.home())
  }

  return {
    guest,
    handleAccept,
    handleCancel
  }
}
