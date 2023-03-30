import {useCases} from 'home-expenses-domain'

export default async function handler(req, res) {
  const {id} = req.query

  const {removeExpenseUseCase} = useCases

  await removeExpenseUseCase.execute(id)
  res.status(204).json({})
}
