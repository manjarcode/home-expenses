import GuestService from 'home-expenses-services/guests/guestService.js'

export default function handler(req, res) {
  const {id} = req.query
  const guestService = new GuestService()

  guestService.delete({id})

  res.status(204).json({})
}
