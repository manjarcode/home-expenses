const routes = {
  home: () => '/',
  guest: {
    add: () => '/guests/add',
    edit: id => `/guests/${id}/edit`
  },
  expense: {
    add: () => '/expenses/add',
    edit: id => `/expenses/${id}/edit`
  }
}

export default routes
