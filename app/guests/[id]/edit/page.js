'use client'
import {useEffect, useState} from 'react'

import {useParams, useRouter} from 'next/navigation'

import {Box, Typography} from '@mui/material'

import useGuests from '../../../../hooks/useGuests.js'
import routes from '../../../routes.js'
import GuestForm from '../../../../components/guests/guestForm/index.js'

export default function GuestUpdatePage() {
  const {id} = useParams()
  const {get, update} = useGuests()
  const [guest, setGuest] = useState()
  const router = useRouter()

  useEffect(() => {
    if (!id) return

    get(id).then(givenGuest => {
      setGuest(givenGuest)
    })
  }, [get, id])

  const onAcceptHandler = guest => {
    update(guest)
    router.push(routes.home())
  }

  const onCancelHandler = () => {
    router.push(routes.home())
  }
  return (
    <Box>
      <Typography variant="h2">Editar Inquilino</Typography>

      {guest && <GuestForm onAccept={onAcceptHandler} onCancel={onCancelHandler} guest={guest} />}
    </Box>
  )
}
