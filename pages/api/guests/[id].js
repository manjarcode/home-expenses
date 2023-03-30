import {useCases} from 'home-expenses-domain'
export default function handler(req, res) {
  const {id} = req.query

  const {removeGuestUseCase} = useCases

  removeGuestUseCase.execute(id)

  res.status(204).json({})
}
