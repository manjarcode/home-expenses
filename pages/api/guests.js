import GuestService from 'home-expenses-services/guests/GuestService.js'

import {HTTP_STATUS} from '../config.js'

const ACTION_BY_METHOD = {
  [HTTP_STATUS.GET]: list,
  [HTTP_STATUS.POST]: add
}

export default async function handler(req, res) {
  const guestService = new GuestService()

  const action = ACTION_BY_METHOD[req.method]

  const {body} = req

  const promise = action && action({guestService, ...body})

  const result = await promise

  res.status(200).json(result)
}

async function list({guestService}) {
  return guestService.list()
}

async function add({guestService, id, name, from, to, currently}) {
  return guestService.add({id, name, from, to, currently})
}
