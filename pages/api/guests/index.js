import {useCases} from 'home-expenses-domain'
import {HTTP_STATUS} from 'home-expenses-domain/lib/config/index.js'

const ACTION_BY_METHOD = {
  [HTTP_STATUS.GET]: list,
  [HTTP_STATUS.POST]: add
}

export default async function handler(req, res) {
  const action = ACTION_BY_METHOD[req.method]

  const {body} = req

  const promise = action && action({...body})

  const result = await promise

  res.status(200).json(result)
}

async function list() {
  const {listGuestUseCase} = useCases
  return listGuestUseCase.execute()
}

async function add({id, name, period}) {
  const {addGuestUseCase} = useCases
  addGuestUseCase.execute({id, name, period})
}
