import GuestRepository from 'home-expenses-domain/src/guests/repositories/GuestRepository'

export default async function handler(req, res) {
  const repository = new GuestRepository()

  const result = await repository.list()
  res.status(200).json(result)
}
